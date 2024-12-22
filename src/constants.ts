// Default configurations
export const DEFAULT_COLORS = {
  info: "\x1b[36m", // cyan
  success: "\x1b[32m", // green
  warning: "\x1b[33m", // yellow
  error: "\x1b[31m", // red
  reset: "\x1b[0m", // reset
} as const;

export const DEFAULT_EMOJIS = {
  info: "📝",
  success: "✅",
  warning: "⚠️",
  error: "❌",
  group: "📂",
  loading: "⏳",
} as const;

export const DEFAULT_ASYNC_OPTIONS = {
  loading: "Loading...",
  success: "Completed successfully",
  error: "Operation failed",
  loadingIcon: "⏳",
  successIcon: "✅",
  errorIcon: "❌",
  loadingColor: "#87CEEB",
  successColor: "#98FB98",
  errorColor: "#FF6B6B",
} as const;
