import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Character } from 'src/app/core/models/characters/characterData';
import { loadCharacterList } from 'src/app/state/actions/characters.actions';

@Component({
  selector: 'app-flex-characters',
  templateUrl: './flex-characters.component.html',
  styleUrls: ['./flex-characters.component.css'],
})
export class FlexCharactersComponent implements OnInit {
  constructor(private STORE: Store) {}

  characters: Array<Character> = [];

  ngOnInit() {
    this.STORE.dispatch(loadCharacterList());
  }
}
