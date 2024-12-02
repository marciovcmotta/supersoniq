import { FastifyInstance } from 'fastify';
import StatusController from './controllers/StatusController';
import MessageController from './controllers/MessageController';

const router = (app : FastifyInstance) => {
    app.get('/', StatusController.getServerStatus);

    app.get('/messages', MessageController.popMessage); // get message from queue
    app.post('/messages', MessageController.pushMessage); // add message to queue
}

export default router;