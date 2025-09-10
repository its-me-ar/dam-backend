import { Pool } from "pg";
import dotenv from "dotenv";
import logger from "../config/logger";

dotenv.config();

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
	logger.info("Connected to PostgreSQL");
});

export default pool;
