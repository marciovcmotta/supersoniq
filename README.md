# SupersoniQ ⚡️

SupersoniQ is a **lightweight** and **high-performance** messaging broker built with TypeScript. Designed for **speed** and **flexibility**, SupersoniQ leverages **HTTP/2** for efficient API interactions and offers configurable support for **WebSockets** and **data persistence** using **LevelDB**, allowing developers to tailor the system to their specific needs.

## Features ✨

- **High Performance**: Utilizes **HTTP/2** for low-latency and efficient communication.
- **Configurable Real-Time Communication**: Optional **WebSocket** support for instant, bidirectional message delivery.
- **Flexible Persistence**: Optional data persistence using **LevelDB** for durability.
- **Scalable**: Efficiently handles multiple concurrent connections using Fastify and Node.js's event loop.
- **TypeScript Powered**: Leverages TypeScript for enhanced type safety and developer experience.
- **Extensible Design**: Easily customizable for various use cases and architectures.

## Ideal for 💡

- Applications requiring **low-latency messaging**.
- Real-time data processing with **configurable WebSockets**.
- Systems needing **flexible storage options**, from in-memory speed to durable persistence.
- Small to medium-sized systems or microservices architectures.
- Developers seeking a **lightweight alternative** to traditional message brokers.

## Getting Started 🚀

1. **Clone the repository**:
   ```bash
   git clone https://github.com/marciovcmotta/supersoniq.git
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the server**:
   ```bash
   npm start
   ```
   By default, SupersoniQ runs with HTTP/2 API. To enable WebSocket support or data persistence with LevelDB, configure the respective settings in the configuration file.

## Configuration ⚙️

- **Enable WebSocket**:
  - Modify the configuration file to enable WebSocket support.
- **Enable Data Persistence**:
  - Configure the persistence settings to use **LevelDB** for durable message storage.

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bugfix.
3. **Submit a pull request** with a detailed description.

## License 📜

This project is licensed under the Apache 2.0. See the LICENSE file for details.
