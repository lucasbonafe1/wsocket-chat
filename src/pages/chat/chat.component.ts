import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageModel } from '../../models/message-model';
import { WebsocketService } from '../../services/websocket-service';
import { TypeEnum } from '../../models/enums/type-enum';

@Component({
  selector: 'chat-page',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy{
  protected contentMessage: string = '';
  protected TypeEnum = TypeEnum;
  
  constructor(
    private webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    this.messageListener();
  }
  
  public sendMessage(type : TypeEnum): void {
    const model = new MessageModel(type, this.contentMessage);
    this.webSocketService.sendMessage(model);

    this.contentMessage = '';
  }
  
  messageListener() {
    this.webSocketService
      .receiveMessages().subscribe({
        next: (msg) => console.log('Conectado e recebendo:', msg),
        error: (err) => console.error('Erro na conexão:', err)
      });
  }

  ngOnDestroy(): void {
    this.webSocketService.disconnectSocket();
  }
}
