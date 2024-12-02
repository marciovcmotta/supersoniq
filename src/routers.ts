import { FastifyInstance } from 'fastify';
import WelcomeController from './controllers/WelcomeController';

const router = (app : FastifyInstance) => {
    app.get('/', WelcomeController.getServerStatus);

    // app.get('/messages', MessageController.getMessages);
    // app.post('/messages', MessageController.postMessage);
}

export default router;