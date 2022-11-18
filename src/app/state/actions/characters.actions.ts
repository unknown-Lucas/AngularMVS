import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/core/models/characters/characterData';

export const loadCharacterList = createAction(
  '[Characters API] load Characters'
);

export const loadedCharacterList = createAction(
  '[Characters API] Characters loaded success',
  props<{ characterlist: ReadonlyArray<Character>; loading: boolean }>()
);

export const dispatchCharacter = createAction(
  '[Character List] Selects a character',
  props<{ selectedCharacter: Character }>()
);
