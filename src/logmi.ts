import {
  LoggerOptions,
  LogOptions,
  AsyncLogOptions,
  LogType,
  ColorMap,
  EmojiMap,
} from "./types";
import {
  DEFAULT_COLORS,
  DEFAULT_EMOJIS,
  DEFAULT_ASYNC_OPTIONS,
} from "./constants";

/**
 * logmi - A beautiful console logger with colors, emojis, and async support
 *
 * Features:
 * - Colored output (ANSI and HEX colors)
 * - Emoji support
 * - Indentation and grouping
 * - Promise and callback support
 * - Method chaining
 *
 * @example
 * ```typescript
 * const logger = new Logmi();
 *
 * // Basic logging
 * logger.info("Server started");
 * logger.success("Connected to database");
 *
 * // With custom styling
 * logger.info("Deploy successful", {
 *   icon: "🚀",
 *   color: "#87CEEB"
 * });
 *
 * // Grouped logs
 * logger
 *   .group("User Login")
 *   .info("Checking credentials...")
 *   .success("Access granted")
 *   .groupEnd();
 * ```
 */
class Logmi {
  private indentLevel: number = 0;
  private readonly indentSize: number;
  private readonly useColors: boolean;
  private readonly useEmojis: boolean;
  private readonly colors: ColorMap;
  private readonly emojis: EmojiMap;

  /**
   * Create a new Logmi instance
   * @param options Configuration options for the logger
   */
  constructor(options: LoggerOptions = {}) {
    this.indentSize = options.indentSize ?? 2;
    this.useColors = options.useColors ?? true;
    this.useEmojis = options.useEmojis ?? true;
    this.colors = { ...DEFAULT_COLORS, ...options.colors };
    this.emojis = { ...DEFAULT_EMOJIS, ...options.emojis };
  }

  private _hexToRgb(hex: string): [number, number, number] {
    const cleanHex = hex.replace("#", "");
    return [
      parseInt(cleanHex.substring(0, 2), 16),
      parseInt(cleanHex.substring(2, 4), 16),
      parseInt(cleanHex.substring(4, 6), 16),
    ];
  }

  private _formatColor(color: string): string {
    return color.startsWith("#")
      ? `\x1b[38;2;${this._hexToRgb(color).join(";")}m`
      : color;
  }

  private _getIndentation(): string {
    return " ".repeat(this.indentLevel * this.indentSize);
  }

  private _formatMessage(
    type: LogType,
    message: string,
    options: LogOptions = {}
  ): string {
    const indent = this._getIndentation();
    const emoji = this.useEmojis ? `${options.icon ?? this.emojis[type]} ` : "";
    const color = this.useColors
      ? this._formatColor(options.color ?? this.colors[type])
      : "";
    const reset = this.useColors ? this.colors.reset : "";

    return `${color}${indent}${emoji}${message}${reset}`;
  }

  /**
   * Log an informational message
   * @param message The message to log
   * @param options Custom styling options
   * @returns this (for method chaining)
   */
  public info(message: string, options?: LogOptions): this {
    console.log(this._formatMessage("info", message, options));
    return this;
  }

  /**
   * Log a success message
   * @param message The message to log
   * @param options Custom styling options
   * @returns this (for method chaining)
   */
  public success(message: string, options?: LogOptions): this {
    console.log(this._formatMessage("success", message, options));
    return this;
  }

  /**
   * Log a warning message
   * @param message The message to log
   * @param options Custom styling options
   * @returns this (for method chaining)
   */
  public warning(message: string, options?: LogOptions): this {
    console.log(this._formatMessage("warning", message, options));
    return this;
  }

  /**
   * Log an error message
   * @param message The message to log
   * @param options Custom styling options
   * @returns this (for method chaining)
   */
  public error(message: string, options?: LogOptions): this {
    console.log(this._formatMessage("error", message, options));
    return this;
  }

  /**
   * Handle a promise with automatic logging
   * @param promise The promise to handle
   * @param options Custom messages and styling for different states
   * @returns The promise result
   *
   * @example
   * ```typescript
   * const data = await logger.promise(fetchData(), {
   *   loading: "Fetching data...",
   *   success: "Data retrieved",
   *   error: "Failed to fetch data"
   * });
   * ```
   */
  public async promise<T>(
    promise: Promise<T>,
    options: AsyncLogOptions = {}
  ): Promise<T> {
    const opts = { ...DEFAULT_ASYNC_OPTIONS, ...options };

    this.info(opts.loading, {
      icon: opts.loadingIcon,
      color: opts.loadingColor,
    });

    try {
      const result = await promise;
      this.success(opts.success, {
        icon: opts.successIcon,
        color: opts.successColor,
      });
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : String(err);
      this.error(`${opts.error}: ${errorMessage}`, {
        icon: opts.errorIcon,
        color: opts.errorColor,
      });
      throw err;
    }
  }

  /**
   * Start a new log group with increased indentation
   * @param label The group label
   * @returns this (for method chaining)
   *
   * @example
   * ```typescript
   * logger
   *   .group("User Authentication")
   *   .info("Checking credentials...")
   *   .success("Access granted")
   *   .groupEnd();
   * ```
   */
  public group(label: string): this {
    const indent = this._getIndentation();
    const emoji = this.useEmojis ? `${this.emojis.group} ` : "";
    console.log(`${indent}${emoji}${label}`);
    this.indentLevel++;
    return this;
  }

  /**
   * End the current log group
   * @returns this (for method chaining)
   */
  public groupEnd(): this {
    if (this.indentLevel > 0) {
      this.indentLevel--;
    }
    return this;
  }
}

export default Logmi;
