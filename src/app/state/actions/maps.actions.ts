import { createAction, props } from "@ngrx/store";
import { Map } from "src/app/core/models/maps/map";

export const loadMapList = createAction(
  '[Maps API] Load maps'
)

export const loadedMapList = createAction(
  '[Maps API] Maps loaded success',
  props<{ mapList:ReadonlyArray<Map> , loading: boolean}>()
)
