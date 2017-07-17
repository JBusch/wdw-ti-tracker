import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GamesService} from '../../shared/games.service';

@Component({
  selector: 'wdw-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private gamesService: GamesService) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      gameName: ['', Validators.required],
      numberOfPlayers: [''],
      protectGameWithPassword: [''],
      gamePassword: ['']
    });
  }

  createGame(formValue) {
    this.gamesService.createGame(formValue);
  }


}
