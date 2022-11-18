import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { handleFilterChange } from 'src/app/state/actions/filter.actions';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss'],
})
export class SearcherComponent implements OnInit {
  value: string = '';
  search = new UntypedFormControl('');

  constructor(private STORE: Store) {}

  ngOnInit() {
    /*launch the event when the values of the input change*/
    this.search.valueChanges
      .pipe(debounceTime(250))
      .subscribe((filter: Readonly<string>) => {
        this.STORE.dispatch(handleFilterChange({ filter }));
      });
  }
}
