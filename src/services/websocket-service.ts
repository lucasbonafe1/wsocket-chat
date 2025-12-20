import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { MessageModel } from '../models/message-model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$: WebSocketSubject<any> = {} as WebSocketSubject<any>;

  // So inicializa se estiver no browser (evita erro de web socket not defined)
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.socket$ = webSocket({
        url: 'ws://localhost:8080/ws',
        deserializer: ({data}) => data,
        serializer: (value) => (typeof value === 'string' ? value : JSON.stringify(value))
      });

      console.log('WebSocket initialized');
    }
  }

  sendMessage(body: MessageModel) {
    this.socket$.next(body);
  }

  receiveMessages() {
    return this.socket$.asObservable();
  }

  disconnectSocket() {
    this.socket$.complete();
  }
}
