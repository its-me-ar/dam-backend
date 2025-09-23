/**
 * Express Application Configuration
 * 
 * Rate Limiting Configuration:
 * - General: 100 requests per 15 minutes (configurable via env vars)
 * - Auth: 5 requests per 15 minutes (stricter for security)
 * - Upload: 20 requests per hour (file upload protection)
 * 
 * Environment Variables:
 * - RATE_LIMIT_WINDOW_MS: General rate limit window (default: 900000ms = 15min)
 * - RATE_LIMIT_MAX_REQUESTS: General max requests (default: 100)
 * - AUTH_RATE_LIMIT_WINDOW_MS: Auth rate limit window (default: 900000ms = 15min)
 * - AUTH_RATE_LIMIT_MAX_REQUESTS: Auth max requests (default: 5)
 * - UPLOAD_RATE_LIMIT_WINDOW_MS: Upload rate limit window (default: 3600000ms = 1hr)
 * - UPLOAD_RATE_LIMIT_MAX_REQUESTS: Upload max requests (default: 20)
 */

import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import logger from "./config/logger";
import { responseHandler } from "./middlewares/responseHandler";
import routes from "./routes";
import swaggerUi from "swagger-ui-express";
import yaml from "yamljs";

const swaggerDoc = yaml.load("./swagger.yaml");

const app = express();

// CORS configuration
const allowedOrigin = process.env.CORS_ORIGIN || process.env.FRONTEND_URL || "*";
const corsOptions: cors.CorsOptions = {
	origin: allowedOrigin === "*" ? true : allowedOrigin,
	methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
	allowedHeaders: [
 		"Authorization",
 		"Content-Type",
 		"Accept",
 		"Cache-Control",
 		"Pragma",
 		"X-Requested-With",
 	],
	credentials: true,
	optionsSuccessStatus: 204,
};

// Rate limiting configurations
// General rate limiter for all API routes
const generalLimiter = rateLimit({
	windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || "900000"), // 15 minutes default
	max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || "100"), // 100 requests per windowMs
	message: {
		error: "Too many requests from this IP, please try again later.",
		statusCode: 429
	},
	standardHeaders: true,
	legacyHeaders: false,
	skip: (req) => {
		// Skip rate limiting for health checks and docs
		return req.path === "/api/health" || req.path === "/health" || req.path.startsWith("/docs");
	},
	handler: (req, res) => {
		logger.warn(`Rate limit exceeded for IP: ${req.ip} on path: ${req.path}`);
		res.status(429).json({
			error: "Too many requests from this IP, please try again later.",
			statusCode: 429
		});
	}
});

// Authentication rate limiter - stricter limits for auth endpoints
const authLimiter = rateLimit({
	windowMs: parseInt(process.env.AUTH_RATE_LIMIT_WINDOW_MS || "900000"), // 15 minutes default
	max: parseInt(process.env.AUTH_RATE_LIMIT_MAX_REQUESTS || "5"), // 5 auth requests per windowMs
	message: {
		error: "Too many authentication attempts, please try again later.",
		statusCode: 429
	},
	standardHeaders: true,
	legacyHeaders: false,
	skipSuccessfulRequests: true, // Don't count successful requests
	handler: (req, res) => {
		logger.warn(`Auth rate limit exceeded for IP: ${req.ip} on path: ${req.path}`);
		res.status(429).json({
			error: "Too many authentication attempts, please try again later.",
			statusCode: 429
		});
	}
});

// Upload rate limiter - limits for file upload endpoints
const uploadLimiter = rateLimit({
	windowMs: parseInt(process.env.UPLOAD_RATE_LIMIT_WINDOW_MS || "3600000"), // 1 hour default
	max: parseInt(process.env.UPLOAD_RATE_LIMIT_MAX_REQUESTS || "20"), // 20 uploads per hour
	message: {
		error: "Too many upload requests, please try again later.",
		statusCode: 429
	},
	standardHeaders: true,
	legacyHeaders: false,
	handler: (req, res) => {
		logger.warn(`Upload rate limit exceeded for IP: ${req.ip} on path: ${req.path}`);
		res.status(429).json({
			error: "Too many upload requests, please try again later.",
			statusCode: 429
		});
	}
});

// Relax CORP for API responses; adjust if serving cross-origin resources
app.use(
	helmet({
 		crossOriginResourcePolicy: { policy: "cross-origin" },
 	})
);
app.use(cors(corsOptions));
app.use(express.json());
app.use(responseHandler);

// Apply rate limiting middleware
// Order matters: more specific routes should be applied before general ones
app.use(generalLimiter); // Apply to all routes first

// Apply specific rate limiting to auth routes (stricter limits)
app.use("/api/auth", authLimiter);

// Apply upload rate limiting to asset routes (file upload limits)
app.use("/api/assets", uploadLimiter);

app.use("/api", routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	logger.error(err.message);
	return res.error("Internal Server Error");
});

export default app;
