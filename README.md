# SupersoniQ ⚡️

SupersoniQ is a **lightweight** and **high-performance** messaging solution built in TypeScript. It is designed for **speed**, **real-time communication**, and **flexibility**, making it easy to integrate into your applications with minimal overhead. It leverages **HTTP/2** for efficient API interactions and **WebSockets** for real-time delivery.

## Features ✨

- **Blazing Fast Performance** ⚡️: Designed for low latency and high throughput, using memory-first architecture.
- **Real-Time Communication** 📡: WebSocket support for instant, bidirectional message delivery.
- **Flexible Persistence** 💾: Memory-based by default, with optional persistence using SQLite for durability.
- **Scalable** 📈: Handles multiple concurrent connections efficiently using Fastify and Node.js's event loop.
- **Built on Modern Protocols** 🌐: Supports HTTP/2 for efficient multiplexing and `server push`.
- **TypeScript Powered** 🟦: Leverages TypeScript for enhanced type safety and developer experience.
- **Extensible Design** 🔧: Built to be easily customized for various use cases and architectures.

## Ideal for 💡

- Applications requiring **low-latency messaging** (e.g., chat apps, gaming, IoT).
- Real-time data processing with **WebSockets** and **HTTP/2**.
- Systems needing **flexible storage options**, from in-memory speed to durable persistence.
- Small to medium-sized systems or microservices architecture 🚀.
- Developers looking for a **lightweight alternative to RabbitMQ** or similar tools.

## Getting Started 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/marciovcmotta/supersoniq.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```

4. Explore the API with the included HTTP/2 endpoints or WebSocket connections.

## How It Works 🛠️

1. **In-Memory First**: Messages are stored in memory by default for ultra-fast access.
2. **Optional Persistence**: Configure SQLite for message durability if needed.
3. **Real-Time Updates**: WebSockets enable immediate message delivery and client notifications.
4. **Efficient API**: Use HTTP/2 for multiple requests over a single connection with reduced latency.

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description.

## License 📜

This project is licensed under the Apache 2.0. See the LICENSE file for details.
