import { createLogger, format, transports } from "winston";
import path from "path";

const logLevels = {
	error: 0,
	warn: 1,
	info: 2,
	http: 3,
	debug: 4,
};

const logger = createLogger({
	levels: logLevels,
	level: "debug",
	format: format.combine(
		format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
		format.colorize({ all: true }),
		format.printf(
			({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`,
		),
	),
	transports: [
		// Console logs
		new transports.Console(),

		// Error logs
		new transports.File({
			filename: path.join("logs", "error.log"),
			level: "error",
		}),

		// Warning logs
		new transports.File({
			filename: path.join("logs", "warn.log"),
			level: "warn",
		}),

		// Info logs
		new transports.File({
			filename: path.join("logs", "info.log"),
			level: "info",
		}),

		// All logs combined
		new transports.File({
			filename: path.join("logs", "combined.log"),
		}),
	],
	exitOnError: false,
});

export default logger;
