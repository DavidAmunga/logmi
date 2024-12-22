/**
 * Configuration options for initializing the logger
 */
export interface LoggerOptions {
  /** Number of spaces for each indentation level (default: 2) */
  indentSize?: number;
  /** Enable/disable colored output (default: true) */
  useColors?: boolean;
  /** Enable/disable emoji icons (default: true) */
  useEmojis?: boolean;
  /** Custom color mappings for different log levels */
  colors?: Partial<ColorMap>;
  /** Custom emoji mappings for different log levels */
  emojis?: Partial<EmojiMap>;
}

/**
 * Color mappings for different log levels
 * Can use ANSI color codes or HEX colors (#RRGGBB)
 */
export interface ColorMap {
  /** Color for info messages (default: cyan) */
  info: string;
  /** Color for success messages (default: green) */
  success: string;
  /** Color for warning messages (default: yellow) */
  warning: string;
  /** Color for error messages (default: red) */
  error: string;
  /** Reset color code - don't override this */
  reset: string;
}

/**
 * Emoji mappings for different log levels
 */
export interface EmojiMap {
  /** Emoji for info messages (default: 📝) */
  info: string;
  /** Emoji for success messages (default: ✅) */
  success: string;
  /** Emoji for warning messages (default: ⚠️) */
  warning: string;
  /** Emoji for error messages (default: ❌) */
  error: string;
  /** Emoji for group headers (default: 📂) */
  group: string;
  /** Emoji for loading states (default: ⏳) */
  loading: string;
}

/**
 * Options for individual log messages
 */
export interface LogOptions {
  /** Custom emoji/icon for this specific message */
  icon?: string;
  /** Custom color for this specific message (HEX or ANSI) */
  color?: string;
}

/**
 * Options for async operations (promises and callbacks)
 */
export interface AsyncLogOptions {
  /** Message to show during loading state */
  loading?: string;
  /** Message to show on successful completion */
  success?: string;
  /** Message to show on error */
  error?: string;
  /** Custom emoji for loading state */
  loadingIcon?: string;
  /** Custom emoji for success state */
  successIcon?: string;
  /** Custom emoji for error state */
  errorIcon?: string;
  /** Custom color for loading state */
  loadingColor?: string;
  /** Custom color for success state */
  successColor?: string;
  /** Custom color for error state */
  errorColor?: string;
}

/** Valid log types (excluding reset) */
export type LogType = keyof Omit<ColorMap, "reset">;

/** Callback function type for async operations */
export type CallbackFunction<T> = (
  callback: (error: Error | null, result: T) => void
) => void;
