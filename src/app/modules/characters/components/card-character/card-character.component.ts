import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Character } from 'src/app/core/models/characters/characterData';
import { Observable } from 'rxjs';
import {
  selectCharacters,
  selectFilter,
} from 'src/app/state/selectors/characters.selector';
import { dispatchCharacter } from 'src/app/state/actions/characters.actions';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css'],
})
export class CardCharacterComponent implements OnInit {
  characters$: Observable<ReadonlyArray<Character>> = new Observable();
  filter$: Observable<Readonly<string>> = new Observable();

  constructor(private ROUTER: Router, private STORE: Store) {
    this.characters$ = this.STORE.select(selectCharacters);
    this.filter$ = this.STORE.select(selectFilter);
  }

  ngOnInit(): void {}

  onClick() {}

  selectCharacter(character: Character) {
    this.STORE.dispatch(dispatchCharacter({ selectedCharacter: character }));
  }
}
