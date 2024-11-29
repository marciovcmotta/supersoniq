import { FastifyInstance } from 'fastify';

const router = (app : FastifyInstance) => {
    app.get('/', () => {
        return { message: "🔥 SupersoniQ is running..." }
    })
    // app.get('/messages', MessageController.getMessages);
    // app.post('/messages', MessageController.postMessage);
}

export default router;