import { FastifyReply, FastifyRequest } from 'fastify';
import MessageService from '../services/MessageService';

class MessageController {
    async popMessage(request: FastifyRequest, reply: FastifyReply) {
        const httpResponse = await MessageService.popMessageService();
        reply.code(httpResponse.status).send(httpResponse.body);
    }

    async pushMessage(request: FastifyRequest, reply: FastifyReply) {
        const { content } = request.body as { content: string };
        const httpResponse = await MessageService.pushMessageService(content);
        reply.code(httpResponse.status).send(httpResponse.body);
    }
}

export default new MessageController();