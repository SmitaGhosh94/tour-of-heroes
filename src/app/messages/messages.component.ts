import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //will still inject a singleton if it's public
  //needs to be public because we will bind the service to the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
