import { createReducer, on } from '@ngrx/store';
import { handleFilterChange } from '../actions/filter.actions';

export const initialState: Readonly<string> = '';

export const filterReducer = createReducer(
  initialState,
  on(handleFilterChange, (state, { filter }) => {
    return filter;
  })
);
