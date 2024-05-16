import { Component } from '@angular/core';
import { Socket, io } from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public active = 1;
  title = 'AngularServerSidePro';
  public message = '';
  private socket!: Socket;

  constructor() {
    if (typeof window !== 'undefined' && window.navigator) {
      this.socket = io('ws://angular-rest.azurewebsites.net');
      this.socket.on('message', (message) => {
        console.log(message);
      });
      this.socket.emit('message');
    }
  }

  public sendMessage() {
    this.socket.emit('message', this.message);
  }
}
