import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'wdw-errors',
  templateUrl: './errorLogin.component.html',
  styleUrls: ['./errorLogin.component.scss']
})
export class errorLoginComponent implements OnInit {

  public title: string;
  public message: string;

  constructor(public dialogRef: MdDialogRef<errorLoginComponent>) {

  }
  ngOnInit() {
  }

}
