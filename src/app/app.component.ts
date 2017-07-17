import {Component} from '@angular/core';
import {MessagesService} from './shared/messages.service';

@Component({
  selector: 'wdw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public result: any;

  constructor(private messagesService: MessagesService) {
  }

  public openDialog() {
    this.messagesService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => this.result = res);
  }


}
