import InMemoryMessageStore from "../entities/InMemoryMessageStore";
import { Message } from "../entities/Message";
import { HttpContentModel } from "../models/HttpResponseModel";
import { StatusCode } from "../utils/StatusCodes";
import { v4 as uuidv4 } from "uuid";

class MessageService {
    async popMessageService() {
        const response = new HttpContentModel();
        const message = await InMemoryMessageStore.popMessage();

        response.status = message ? StatusCode.OK : StatusCode.NotFound;
        response.body = message ?? { "server-reply": "no content found in queue" };

        console.log("POP Response:", response);

        return response;
    }

    async pushMessageService(content: string) {
        const response = new HttpContentModel();
        const message = new Message(uuidv4(), content);
        const isQueued = await InMemoryMessageStore.pushMessage(message);

        response.status = isQueued ? StatusCode.OK : StatusCode.InternalServerError;
        response.body = isQueued ? { "server-reply": "message successfully queued" } : { "server-reply": "internal server error" };

        console.log("PUSH Response:", response);

        return response;
    }
}

export default new MessageService();
