import {
	S3Client,
	PutObjectCommand,
	GetObjectCommand,
	PutObjectCommandInput,
	GetObjectCommandInput,
	HeadObjectCommandInput,
	HeadObjectCommand,
	S3ServiceException,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
import { Readable } from "stream";
import fs from "fs";
import path from "path";

dotenv.config();

export class S3Service {
	private client: S3Client;
	private readonly bucket: string;

	constructor() {
		const accessKey = process.env.MINIO_ACCESS_KEY!;
		const secretKey = process.env.MINIO_SECRET_KEY!;
		const bucketName = process.env.MINIO_BUCKET_NAME!;
		const endpoint = process.env.MINIO_ENDPOINT!;
		const region = process.env.MINIO_REGION || "us-east-1";

		this.client = new S3Client({
			region,
			endpoint,
			credentials: {
				accessKeyId: accessKey,
				secretAccessKey: secretKey,
			},
			forcePathStyle: true, // required for MinIO
		});

		this.bucket = bucketName;
	}

	/**
	 * Upload small files directly (not recommended for huge files).
	 */
	async upload(
		key: string,
		body: Buffer | Uint8Array | string,
		contentType?: string,
	) {
		const params: PutObjectCommandInput = {
			Bucket: this.bucket,
			Key: key,
			Body: body,
			ContentType: contentType,
		};

		return this.client.send(new PutObjectCommand(params));
	}

	/**
	 * Generate presigned URL for uploading large files directly.
	 */
	async getPresignedUploadUrl(
		key: string,
		expiresIn: number = 3600,
	): Promise<string> {
		const command = new PutObjectCommand({
			Bucket: this.bucket,
			Key: key,
		});
		return getSignedUrl(this.client, command, { expiresIn });
	}

	/**
	 * Generate presigned URL for downloading files directly.
	 */
	async getPresignedDownloadUrl(
		key: string,
		expiresIn: number = 3600,
	): Promise<string> {
		const command: GetObjectCommandInput = { Bucket: this.bucket, Key: key };
		return getSignedUrl(this.client, new GetObjectCommand(command), {
			expiresIn,
		});
	}

	/**
	 * Check if a file exists in the bucket
	 * @param key - path of the file in bucket
	 * @returns boolean - true if file exists, false if not
	 */

	async fileExists(key: string): Promise<boolean> {
		try {
			const params: HeadObjectCommandInput = {
				Bucket: this.bucket,
				Key: key,
			};
			await this.client.send(new HeadObjectCommand(params));
			return true; // file exists
		} catch (err: unknown) {
			// Narrow the unknown error
			if (err instanceof S3ServiceException) {
				if (err.name === "NotFound" || err.$metadata?.httpStatusCode === 404) {
					return false; // file does not exist
				}
			}
			throw err; // other errors (network, permissions)
		}
	}

	/**
	 * Download file from S3 and return as Buffer
	 */
	async download(key: string): Promise<Buffer> {
		const command: GetObjectCommandInput = { Bucket: this.bucket, Key: key };
		const response = await this.client.send(new GetObjectCommand(command));

		if (!response.Body) {
			throw new Error("No file body returned from S3");
		}

		const stream = response.Body as Readable;
		const chunks: Buffer[] = [];

		for await (const chunk of stream) {
			chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
		}

		return Buffer.concat(chunks);
	}

	/**
	 * Download file from S3 and save to local file system
	 */
	async downloadToFile(key: string, localPath: string): Promise<void> {
		const buffer = await this.download(key);

		// ensure directory exists
		fs.mkdirSync(path.dirname(localPath), { recursive: true });

		await fs.promises.writeFile(localPath, buffer);
	}
}
