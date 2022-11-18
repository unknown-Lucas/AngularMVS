import { createReducer, on } from '@ngrx/store';
import { Map } from 'src/app/core/models/maps/map';
import { loadedMapList } from '../actions/maps.actions';

export interface MapState {
  mapList: ReadonlyArray<Map>;
  loading: boolean;
  selectedMap?: Map;
}

const initialState: MapState = {
  mapList: [],
  loading: true,
  selectedMap: undefined,
};

export const mapsReducer = createReducer(
  initialState,
  on(loadedMapList, (state, { mapList, loading }) => {
    return { loading, mapList };
  })
);
