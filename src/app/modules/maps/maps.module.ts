import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexMapsComponent } from './pages/flex-maps/flex-maps.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { MAP_REDUCERS } from 'src/app/state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { MapEffects } from 'src/app/state/effects/maps.effects';
import { CardMapsComponent } from './components/card-maps/card-maps.component';

@NgModule({
  declarations: [FlexMapsComponent, CardMapsComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature('mapsModule', MAP_REDUCERS),
    EffectsModule.forFeature([MapEffects]),
  ],
})
export class MapsModule {}
