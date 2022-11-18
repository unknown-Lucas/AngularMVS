import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, firstValueFrom, Observable } from 'rxjs';
import { Character } from 'src/app/core/models/characters/characterData';
import { selectCharacterInfo } from 'src/app/state/selectors/characters.selector';

@Component({
  selector: 'app-characters-info',
  templateUrl: './characters-info.component.html',
  styleUrls: ['./characters-info.component.css'],
})
export class CharactersInfoComponent implements OnInit {
  character$: Observable<Character | undefined> = new Observable();

  constructor(private STORE: Store, private ROUTER: Router) {}

  async ngOnInit() {
    this.character$ = this.STORE.select(selectCharacterInfo);

    if ((await firstValueFrom(this.character$)) === undefined) {
      this.ROUTER.navigateByUrl('');
    }
  }
}
