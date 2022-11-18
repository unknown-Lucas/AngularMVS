import { createAction, props } from "@ngrx/store";

export const handleFilterChange = createAction(
  '[Filter value] Handle filter value changes',
  props<{ filter: Readonly<string> }>()
)


