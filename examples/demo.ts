import Logmi from "../src/logmi";

const logger = new Logmi();

// Basic logging
logger.info("Starting application...");
logger.success("Configuration loaded successfully");
logger.warning("Cache is not enabled");
logger.error("Failed to connect to database");

// Logging with custom icons and HEX colors
logger.success("Task completed", {
  icon: "✨",
  color: "#9EBFC3",
});

logger.error("Critical error", {
  icon: "🚨",
  color: "#FF6B6B",
});

// Group logging with custom styles
logger
  .group("User Authentication")
  .info("Checking credentials...")
  .success("User authenticated", {
    icon: "🔑",
    color: "#4CAF50",
  })
  .group("Session Details")
  .info("Session ID: abc123", {
    icon: "🔖",
    color: "#2196F3",
  })
  .info("Expires in: 24h", { icon: "⏱️" })
  .groupEnd()
  .info("Redirecting to dashboard...")
  .groupEnd();
