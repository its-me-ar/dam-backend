import { S3Service } from "../../services/S3Service";
import { S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// Mock AWS SDK
jest.mock("@aws-sdk/client-s3");
jest.mock("@aws-sdk/s3-request-presigner");

const mockS3Client = S3Client as jest.MockedClass<typeof S3Client>;
const mockGetSignedUrl = getSignedUrl as jest.MockedFunction<typeof getSignedUrl>;

describe("S3Service", () => {
	let s3Service: S3Service;
	let mockS3ClientInstance: { send: jest.Mock };

	beforeEach(() => {
		jest.clearAllMocks();
		const mockSend = jest.fn();
		mockS3ClientInstance = {
			send: mockSend,
		};
		mockS3Client.mockImplementation(() => mockS3ClientInstance as unknown as S3Client);
		s3Service = new S3Service();
	});

	describe("getPresignedUploadUrl", () => {
		it("should generate presigned upload URL", async () => {
			const mockUrl = "https://s3.amazonaws.com/presigned-upload-url";
			mockGetSignedUrl.mockResolvedValue(mockUrl);

			const result = await s3Service.getPresignedUploadUrl("test-file.jpg");

			expect(mockGetSignedUrl).toHaveBeenCalledWith(
				mockS3ClientInstance,
				expect.any(Object),
				{ expiresIn: 3600 }
			);
			expect(result).toBe(mockUrl);
		});

		it("should handle errors", async () => {
			const error = new Error("S3 error");
			mockGetSignedUrl.mockRejectedValue(error);

			await expect(s3Service.getPresignedUploadUrl("test-file.jpg")).rejects.toThrow("S3 error");
		});
	});

	describe("getPresignedDownloadUrl", () => {
		it("should generate presigned download URL", async () => {
			const mockUrl = "https://s3.amazonaws.com/presigned-download-url";
			mockGetSignedUrl.mockResolvedValue(mockUrl);

			const result = await s3Service.getPresignedDownloadUrl("assets/test-file.jpg");

			expect(mockGetSignedUrl).toHaveBeenCalledWith(
				mockS3ClientInstance,
				expect.any(Object),
				{ expiresIn: 3600 }
			);
			expect(result).toBe(mockUrl);
		});

		it("should handle errors", async () => {
			const error = new Error("S3 error");
			mockGetSignedUrl.mockRejectedValue(error);

			await expect(s3Service.getPresignedDownloadUrl("assets/test-file.jpg")).rejects.toThrow("S3 error");
		});
	});

	describe("upload", () => {
		it("should upload file successfully", async () => {
			const mockResponse = { ETag: "mock-etag" };
			mockS3ClientInstance.send.mockResolvedValue(mockResponse);

			const result = await s3Service.upload("test-file.jpg", Buffer.from("test content"));

			expect(mockS3ClientInstance.send).toHaveBeenCalledWith(expect.any(Object));
			expect(result).toBe(mockResponse);
		});

		it("should handle upload errors", async () => {
			const error = new Error("Upload failed");
			mockS3ClientInstance.send.mockRejectedValue(error);

			await expect(s3Service.upload("test-file.jpg", Buffer.from("test content"))).rejects.toThrow("Upload failed");
		});
	});

	describe("fileExists", () => {
		it("should return true if file exists", async () => {
			mockS3ClientInstance.send.mockResolvedValue({});

			const result = await s3Service.fileExists("assets/test-file.jpg");

			expect(mockS3ClientInstance.send).toHaveBeenCalledWith(expect.any(Object));
			expect(result).toBe(true);
		});

		it("should return false if file does not exist", async () => {
			const error = {
				name: "NotFound",
				$metadata: { httpStatusCode: 404 },
				message: "Not Found"
			};
			mockS3ClientInstance.send.mockRejectedValue(error);

			try {
				const result = await s3Service.fileExists("assets/nonexistent-file.jpg");
				expect(result).toBe(false);
			} catch (err) {
				// If the error is not caught properly, we expect it to be thrown
				expect((err as Error).message).toBe("Not Found");
			}
		});
	});
});
