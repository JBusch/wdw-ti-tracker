import {Injectable} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {errorLoginComponent} from '../../messages/errorLogin/errorLogin.component';

@Injectable()
export class MessagesService {

  constructor(private dialog: MdDialog) {
  }

  public confirm(title: string, message: string): Observable<boolean> {

    let dialogRef: MdDialogRef<errorLoginComponent>;

    dialogRef = this.dialog.open(errorLoginComponent);
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

}
