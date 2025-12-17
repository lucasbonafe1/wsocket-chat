export class MessageModel {
    public type: string;
    public content: string;

    constructor(type: string, content: string) {
        this.type = type;
        this.content = content;
    }

    
}