## SupersoniQ: A Lightweight Message Broker Built in TypeScript

**SupersoniQ** is an open-source message broker project that aims to provide a lightweight and efficient messaging solution written entirely in TypeScript. Inspired by the features and capabilities of RabbitMQ, SupersoniQ leverages the AMQP protocol for interoperability and WebSockets for real-time communication, while focusing on simplicity and performance.

### Why SupersoniQ?

* **Lightweight and Fast:** Built with Node.js and optimized for efficient message handling.
* **Easy to Use:** A straightforward API makes it simple to integrate SupersoniQ into your applications, whether you're building microservices, handling event-driven architectures, or processing real-time data.
* **Real-time Communication:**  Utilizes WebSockets to enable low-latency messaging and push notifications for consumers.
* **AMQP Compliant:** By adhering to the AMQP 0-9-1 protocol, SupersoniQ ensures compatibility with various clients and tools within the AMQP ecosystem.
* **Scalable:** Designed to handle a growing number of connections and messages efficiently.

### Key Features

* **Core Messaging:** Supports basic AMQP operations such as publishing messages to queues, consuming messages, and acknowledging message delivery.
* **Queue Management:** Allows for the creation and deletion of queues to organize and manage message flow.
* **Message Persistence:** Offers options for persisting messages to disk to ensure durability and prevent message loss.
* **WebSocket Integration:**  Provides a WebSocket API for real-time communication and push notifications.
* **Extensible Design:** Provides a foundation for future features like message routing with exchanges, dead-letter queues, and advanced AMQP functionalities.

### Getting Started

The project is currently under active development. You can find the source code and contribute to its development on GitHub: https://github.com/marciovcmotta/supersoniq

To get started, clone the repository and follow the instructions in the README.md file. Contributions, bug reports, and feature requests are welcome!

### Roadmap

The project is currently focused on delivering a Minimum Viable Product (MVP) with core messaging functionalities. Future development plans include:

* **Advanced AMQP features:** Implementing exchanges, dead-letter queues, and message properties.
* **Clustering and High Availability:** Enabling SupersoniQ to run as a cluster for increased reliability and scalability.
* **Management Interface:** Providing a user interface or API for monitoring and managing SupersoniQ.
* **Client Libraries:** Developing client libraries in various programming languages for easier integration.

**Join us in building a lightweight and efficient message broker that empowers developers to build robust and scalable applications.**
