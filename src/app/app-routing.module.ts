import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersInfoComponent } from './modules/characters/pages/characters-info/characters-info.component';
import { FlexCharactersComponent } from './modules/characters/pages/flex-characters/flex-characters.component';
import { FlexMapsComponent } from './modules/maps/pages/flex-maps/flex-maps.component';

const routes: Routes = [
  { path: '', component: FlexCharactersComponent },
  { path: 'character/info', component: CharactersInfoComponent },
  { path: 'maps', component: FlexMapsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
