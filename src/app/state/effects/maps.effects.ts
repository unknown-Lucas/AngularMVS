import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { MapService } from 'src/app/core/services/maps.service';

@Injectable({
  providedIn: 'root',
})
export class MapEffects {
  constructor(private actions$: Actions, private mapService: MapService) {}

  loadMapsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Maps API] Load maps'),
      mergeMap(() =>
        this.mapService.getAllMaps().pipe(
          map((mapList) => ({
            type: '[Maps API] Maps loaded success',
            mapList: mapList,
            loading: false,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
