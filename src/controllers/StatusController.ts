import { FastifyReply, FastifyRequest } from 'fastify';

class StatusController {
    getServerStatus(request: FastifyRequest, reply: FastifyReply) {
        reply.send( { message: "SupersoniQ is running on HTTP/1.1" })
    }
}

export default new StatusController();