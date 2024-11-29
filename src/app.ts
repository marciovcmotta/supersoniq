import fastify from "fastify";
import cors from '@fastify/cors';
import router from './routers';

function createApp() {
    const app = fastify({ logger: true });

    const corsOption = {
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE"]
    }

    app.register(router);
    app.register(cors);

    return app;
}

export default createApp;