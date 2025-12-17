import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WebSocketService } from '../../services/websocket-service';
import { MessageModel } from '../../models/message-model';

@Component({
  selector: 'chat-page',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  protected websocketService: WebSocketService;
  protected contentMessage: string = '';

  constructor(websocketService : WebSocketService) {
    this.websocketService = websocketService;
  }

  public sendMessage(type : string): void {
    const model = new MessageModel(type, this.contentMessage);
    this.websocketService.sendMessage(model);
  }
}
