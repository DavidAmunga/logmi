# Logmi ✨

A beautiful Node.js logger with colors, emojis, and async operation support. Perfect for making your console logs more readable and informative.

## Features ✨

- 🎨 HEX Color support
- 😊 Emoji support
- 🔄 Async operations (Promise & Callback)
- ↩️ Indentation & grouping
- ⚡️ Method chaining
- 🎯 Simple API

## Installation

```bash
npm install logmi
```

## Quick Start

```typescript
import Logmi from "logmi";

const logger = new Logmi({
  indentSize: 2, // Number of spaces for indentation
  useColors: true, // Enable colored output
  useEmojis: true, // Enable emoji icons
});

// Basic logging
logger.info("Server started");
logger.success("Connected to database");
logger.warning("Low memory");
logger.error("Failed to send email");

// With custom icons and colors
logger.info("Deploy successful", {
  icon: "🚀", // Custom emoji
  color: "#87CEEB", // HEX color
});

// Grouped logs with indentation
logger
  .group("User Login")
  .info("Checking credentials...")
  .success("Access granted")
  .info("Last login: 2 days ago")
  .groupEnd();

// Async operations with automatic logging
try {
  const data = await logger.promise(fetchData(), {
    loading: "Fetching data...", // Loading message
    success: "Data retrieved", // Success message
    error: "Failed to fetch data", // Error message
    loadingIcon: "🔄", // Custom icons
    successIcon: "✅",
    errorIcon: "❌",
    loadingColor: "#87CEEB", // Custom colors
    successColor: "#98FB98",
    errorColor: "#FF6B6B",
  });
} catch (err) {
  // Error already logged
}
```

## Async Support

### Promise-based Operations

```javascript
try {
  const data = await logger.promise(fetchUserData(), {
    loading: "Fetching user data...",
    success: "Data retrieved",
    error: "Failed to fetch data",
    loadingIcon: "🔄",
    successIcon: "✅",
    errorIcon: "❌",
  });
} catch (err) {
  // Error already logged
}
```

### Callback-based Operations

```javascript
logger.callback(simulateDbQuery, (err, data) => {
  if (err) {
    logger.error("Failed to query database", { icon: "💢" });
  } else {
    logger.success("Database query successful", { icon: "✅" });
  }
});
```

## API Reference

### Basic Methods

```javascript
logger.info(message, options?) // Info level
logger.success(message, options?) // Success level
logger.warning(message, options?) // Warning level
logger.error(message, options?) // Error level
```

### Options

```javascript
{
  icon?: string;
  color?: string;
}
```

### Async Methods

```javascript
logger.promise(promise, {
loading?: "Loading message",
success?: "Success message",
error?: "Error message",
loadingIcon?: "⏳",
successIcon?: "✅",
errorIcon?: "❌",
loadingColor?: "#87CEEB",
successColor?: "#98FB98",
errorColor?: "#FF6B6B"
})
logger.callback(fn, { / same options as promise / })

```

## Author

**David Amunga**

- Website: [davidamunga.com](https://davidamunga.com)
- Twitter: [@davidamunga_](https://twitter.com/davidamunga_)
- GitHub: [DavidAmunga](https://github.com/DavidAmunga)

## License

MIT License

Copyright (c) 2023 David Amunga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
