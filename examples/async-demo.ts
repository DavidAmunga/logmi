import Logmi from "../src/logmi";

const logger = new Logmi();

// Simulated async functions
const simulateApiCall = (): Promise<{ data: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "API Response" });
    }, 2000);
  });
};

const simulateDbQuery = (
  callback: (error: Error | null, result?: { rows: number[] }) => void
): void => {
  setTimeout(() => {
    callback(null, { rows: [1, 2, 3] });
  }, 1500);
};

const simulateError = (): Promise<never> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Network timeout"));
    }, 1000);
  });
};

// Example usage
async function demo() {
  // 1. Promise-based logging
  logger.group("Promise-based Operations");

  try {
    // Success case
    const apiResult = await logger.promise(simulateApiCall(), {
      loading: "Fetching data from API...",
      success: "API call successful",
      error: "API call failed",
      loadingIcon: "🔄",
      successIcon: "🎯",
    });

    // Error case
    await logger.promise(simulateError(), {
      loading: "Processing payment...",
      success: "Payment processed",
      error: "Payment failed",
      loadingIcon: "💳",
      successIcon: "💰",
      errorIcon: "🚨",
      loadingColor: "#87CEEB",
      successColor: "#98FB98",
      errorColor: "#FF6B6B",
    });
  } catch (err) {
    // Error already logged by promise method
  }

  logger.groupEnd();

  // 2. Callback-style logging
  logger.group("Callback Operations");

  try {
    const dbResult = await logger.callback((cb) => simulateDbQuery(cb), {
      loading: "Querying database...",
      success: "Query completed",
      error: "Query failed",
      loadingIcon: "🔍",
      successIcon: "📊",
    });
  } catch (err) {
    // Error already logged by callback method
  }

  logger.groupEnd();
}

// Run the demo
demo();
