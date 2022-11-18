import { ActionReducerMap } from '@ngrx/store';
import {
  charactersReducer,
  CharacterState,
} from './reducers/characters.reducer';
import { filterReducer } from './reducers/filter.reducer';
import { mapsReducer, MapState } from './reducers/maps.reducer';

export interface filterable {
  filter: Readonly<string>;
}

export interface CharacterReducerState extends filterable {
  characters: CharacterState;
}

export interface MapReducerState extends filterable {
  maps: MapState;
}

export const CHARACTER_REDUCERS: ActionReducerMap<CharacterReducerState> = {
  characters: charactersReducer,
  filter: filterReducer,
};

export const MAP_REDUCERS: ActionReducerMap<MapReducerState> = {
  maps: mapsReducer,
  filter: filterReducer,
};
