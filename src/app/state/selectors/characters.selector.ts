import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CharacterReducerState } from '../app.state';

export const selectCharactersFeature =
  createFeatureSelector<CharacterReducerState>('charactersModule');

export const selectCharacters = createSelector(
  selectCharactersFeature,
  (state) => state.characters.characterlist
);

export const selectFilter = createSelector(
  selectCharactersFeature,
  (state) => state.filter
);

export const selectCharacterInfo = createSelector(
  selectCharactersFeature,
  (state) => state.characters.selectedCharacter
);
