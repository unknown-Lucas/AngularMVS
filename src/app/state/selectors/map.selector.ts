import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MapReducerState } from '../app.state';

export const selectMapsFeatures =
  createFeatureSelector<MapReducerState>('mapsModule');

export const selectMaps = createSelector(
  selectMapsFeatures,
  (state) => state.maps.mapList
);

export const selectFilter = createSelector(
  selectMapsFeatures,
  (state) => state.filter
);

export const selectCharacterInfo = createSelector(
  selectMapsFeatures,
  (state) => state.maps.selectedMap
);
