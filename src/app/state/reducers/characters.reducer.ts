import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/core/models/characters/characterData';
import {
  dispatchCharacter,
  loadedCharacterList,
} from '../actions/characters.actions';

export interface CharacterState {
  characterlist: ReadonlyArray<Character>;
  loading: boolean;
  selectedCharacter?: Character;
}

const initialState: CharacterState = {
  characterlist: [],
  loading: true,
  selectedCharacter: undefined,
};

export const charactersReducer = createReducer(
  initialState,
  on(loadedCharacterList, (state, { characterlist, loading }) => {
    return { loading, characterlist };
  }),
  on(dispatchCharacter, (state, { selectedCharacter }) => {
    return { ...state, selectedCharacter };
  })
);
