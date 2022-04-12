import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit {
  messages: string[] = this.messageService.getMessages();
  deleteMessage(): void {
    this.messageService.clear();
    console.log('delete message service data');
  }
  constructor(public messageService: MessageService) {}

  ngOnInit(): void {}
}
