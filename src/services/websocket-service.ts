import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MessageModel } from '../models/message-model';
import { EMPTY } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$: WebSocketSubject<any> | null = null;

  connect(userId: string) {
    this.socket$ = webSocket({
      url: `${environment.wsUrl}?userId=${userId}`
    });
  }

  sendMessage(body: MessageModel) {
    this.socket$?.next(body);
  }

  receiveMessages() {
    return this.socket$?.asObservable() || EMPTY;
  }

  disconnectSocket() {
    this.socket$?.complete();
  }
}
