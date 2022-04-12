import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  getMessages() {
    return this.messages;
  }
  addMessage(message: string) {
    this.messages.push(message);
  }
  clear() {
    this.messages = [];
  }
  constructor() {}
}
