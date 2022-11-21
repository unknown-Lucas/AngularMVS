import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadMapList } from 'src/app/state/actions/maps.actions';

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
