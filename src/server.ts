import createApp from "./app";
import { loadConfig } from "./config/ConfigLoader";

const config = loadConfig();

async function startServer() {
    const app = createApp();

    const PORT = config.server.port; // PORT '2470' refers to the Mach 2 that is 2.470 km/h

    await app.listen({ port: PORT })
    .then(() => {
        console.log(`⚡ Server running at port: ${PORT}`);
    })
    .catch((err) => {
        console.error(err);
        console.error("⛔ Error while initializing server...")
    })


}

startServer();