export class HttpContentModel {
    public status: number = 0;
    public body: any = null;

    constructor(status: number = 0, body: any = null) {
        this.status = status;
        this.body = body;
    }
}
