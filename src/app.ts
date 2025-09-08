import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
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

// Relax CORP for API responses; adjust if serving cross-origin resources
app.use(
	helmet({
 		crossOriginResourcePolicy: { policy: "cross-origin" },
 	})
);
app.use(cors(corsOptions));
app.use(express.json());
app.use(responseHandler);

app.use("/api", routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	logger.error(err.message);
	return res.error("Internal Server Error");
});

export default app;
