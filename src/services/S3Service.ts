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
}
