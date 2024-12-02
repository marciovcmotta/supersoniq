import { Message } from "./Message";

class InMemoryMessageStore {
    private messages: Message[] = [];

    async popMessage() {
        return this.messages.shift();
    }

    async pushMessage(message: Message) {
        try {
            this.messages.push(message);
            return true;
        } catch (error) {
            console.error("Failed to add message:", error);
            return false;
        }
    }

    async getQueueSize(): Promise<number> {
        return this.messages.length;
    }

}

export default new InMemoryMessageStore();