import winston from "winston";
import path from "path";

const logger = winston.createLogger({
	level: process.env.LOG_LEVEL || "info",
	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.errors({ stack: true }),
		winston.format.json(),
	),
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple(),
			),
		}),
		// Write all logs to combined.log
		new winston.transports.File({
			filename: path.join(process.cwd(), "logs", "combined.log"),
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json(),
			),
		}),
		// Write error logs to error.log
		new winston.transports.File({
			filename: path.join(process.cwd(), "logs", "error.log"),
			level: "error",
			format: winston.format.combine(
				winston.format.timestamp(),
				winston.format.json(),
			),
		}),
	],
});

export default logger;
