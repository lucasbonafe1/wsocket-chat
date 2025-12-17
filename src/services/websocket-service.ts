import { MessageModel } from "../models/message-model";

export class WebSocketService {
    private webSocket: WebSocket;

    constructor() {
        this.webSocket = new WebSocket("ws://localhost:8080/ws");
    }

    public sendMessage(message: MessageModel): void {
        if (this.webSocket.readyState === WebSocket.OPEN) {
            this.webSocket.send(JSON.stringify(message));
        } else{
            console.error("WebSocket is not open. Ready state: " + this.webSocket.readyState);
        }
    }
}
