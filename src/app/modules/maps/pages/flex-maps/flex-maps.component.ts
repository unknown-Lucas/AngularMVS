import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMapList } from 'src/app/state/actions/maps.actions';
import { Observable } from 'rxjs';
import { Map } from 'src/app/core/models/maps/map';
import { selectMaps } from 'src/app/state/selectors/map.selector';

@Component({
  selector: 'app-flex-maps',
  templateUrl: './flex-maps.component.html',
  styleUrls: ['./flex-maps.component.css'],
})
export class FlexMapsComponent implements OnInit {
  constructor(private STORE: Store) {}

  ngOnInit(): void {
    this.STORE.dispatch(loadMapList());
  }
}
