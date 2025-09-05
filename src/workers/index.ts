import logger from "src/config/logger";

// Workers
import "./video.worker";
logger.info("🚀 Video processing worker started");

import "./videoUpload.worker";
logger.info("🚀 Video upload worker started");

import "./videoThumbnail.worker";
logger.info("🚀 Video thumbnail worker started");

import "./image.worker";
logger.info("🖼️ Image processing worker started");

import "./imageThumbnail.worker";
logger.info("🖼️ Image thumbnail worker started");

logger.info("✅ All workers initialized successfully");
