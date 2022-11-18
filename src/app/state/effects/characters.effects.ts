import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CharacterService } from 'src/app/core/services/character.service';

@Injectable()
export class CharacterEffects {
  loadCharacterList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Characters API] load Characters'),
      mergeMap(() =>
        this.characterService.getAllCharacter().pipe(
          map((characterlist) => ({
            type: '[Characters API] Characters loaded success',
            characterlist,loading:false,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
}
