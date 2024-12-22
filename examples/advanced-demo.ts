import Logmi from "../src/logmi";
const logger = new Logmi();

// 1. API Request Logging
logger
  .group("API Request")
  .info("GET /api/users", { icon: "🔄" })
  .info("Headers:", {
    icon: "📋",
    color: "#87CEEB", // Light blue
  })
  .info("  Authorization: Bearer token123")
  .success("Response: 200 OK", {
    icon: "✨",
    color: "#98FB98", // Pale green
  })
  .groupEnd();

// 2. Database Operations
logger
  .group("Database Operations")
  .info("Connecting to MongoDB...", { icon: "🔌" })
  .success("Connection established", {
    icon: "🎯",
    color: "#90EE90", // Light green
  })
  .group("Query Execution")
  .info("Running user search query", { icon: "🔍" })
  .info("Found 5 matching records", {
    icon: "📊",
    color: "#B8860B", // Dark golden
  })
  .groupEnd()
  .groupEnd();

// 3. Error Handling
logger
  .group("Payment Processing")
  .info("Processing payment for order #12345", { icon: "💳" })
  .error("Transaction failed", {
    icon: "❌",
    color: "#FF6B6B", // Light red
  })
  .group("Error Details")
  .error("Invalid card number", {
    icon: "🚫",
    color: "#CD5C5C", // Indian red
  })
  .info("Retry attempt: 1/3", { icon: "🔄" })
  .groupEnd()
  .groupEnd();

// 4. Application Lifecycle
logger
  .group("Application Startup")
  .info("Loading configuration...", { icon: "⚙️" })
  .success("Environment variables loaded", {
    icon: "📝",
    color: "#98FB98", // Pale green
  })
  .warning("Cache server not responding", {
    icon: "⚠️",
    color: "#FFD700", // Gold
  })
  .info("Starting server on port 3000", { icon: "🚀" })
  .success("Server is running", {
    icon: "✅",
    color: "#3CB371", // Medium sea green
  })
  .groupEnd();

// 5. User Authentication Flow
logger
  .group("User Login")
  .info("Login attempt: john@example.com", {
    icon: "👤",
    color: "#87CEEB", // Sky blue
  })
  .group("2FA Verification")
  .info("Sending SMS code", { icon: "📱" })
  .success("SMS delivered", {
    icon: "✉️",
    color: "#98FB98", // Pale green
  })
  .info("Waiting for user input...", { icon: "⏳" })
  .success("2FA verified", {
    icon: "🔐",
    color: "#32CD32", // Lime green
  })
  .groupEnd()
  .success("Login successful", {
    icon: "🎉",
    color: "#3CB371", // Medium sea green
  })
  .groupEnd();

// 6. File Processing
logger
  .group("Image Upload")
  .info("Starting file upload", { icon: "📤" })
  .group("Processing")
  .info("Validating file type", { icon: "🔍" })
  .info("Resizing image", {
    icon: "🖼️",
    color: "#DDA0DD", // Plum
  })
  .success("Optimization complete", {
    icon: "⚡",
    color: "#98FB98", // Pale green
  })
  .groupEnd()
  .success("Upload successful", {
    icon: "💾",
    color: "#3CB371", // Medium sea green
  })
  .groupEnd();

// 7. Task Queue Processing
logger
  .group("Background Jobs")
  .info("Processing email queue", {
    icon: "📨",
    color: "#87CEEB", // Sky blue
  })
  .success("Sent: Welcome email", { icon: "📧" })
  .success("Sent: Order confirmation", { icon: "📧" })
  .warning("Failed: Newsletter", {
    icon: "⚠️",
    color: "#FFA500", // Orange
  })
  .info("Retrying failed jobs", { icon: "🔄" })
  .groupEnd();
