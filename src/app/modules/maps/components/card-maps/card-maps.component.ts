import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { firstValueFrom, Observable } from 'rxjs';
import { Map } from 'src/app/core/models/maps/map';
import {
  selectMaps,
  selectMapsFeatures,
} from 'src/app/state/selectors/map.selector';

@Component({
  selector: 'app-card-maps',
  templateUrl: './card-maps.component.html',
  styleUrls: ['./card-maps.component.css'],
})
export class CardMapsComponent implements OnInit {
  maps$: Observable<ReadonlyArray<Map>> = new Observable();

  constructor(private STORE: Store) {
    this.maps$ = this.STORE.select(selectMaps);
  }

  ngOnInit() {}
}
