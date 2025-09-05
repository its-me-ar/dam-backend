import app from "./app";
import logger from "./config/logger";
import pool from "./db";

const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    // Try connecting to the database
    await pool.query("SELECT 1"); 
    logger.info("✅ Successfully connected to PostgreSQL");

    // Start Express server
    app.listen(PORT, () => {
      logger.info(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    logger.error("❌ Failed to connect to PostgreSQL");
    logger.error(err);
    process.exit(1); 
  }
}

startServer();
