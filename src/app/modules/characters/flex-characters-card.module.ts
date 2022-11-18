import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexCharactersComponent } from './pages/flex-characters/flex-characters.component';
import { CharactersInfoComponent } from './pages/characters-info/characters-info.component';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from 'src/app/core/core.module';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { StoreModule } from '@ngrx/store';
import { CHARACTER_REDUCERS } from 'src/app/state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from 'src/app/state/effects/characters.effects';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FlexCharactersComponent,
    CharactersInfoComponent,
    CardCharacterComponent,
    CardCharacterComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forFeature('charactersModule', CHARACTER_REDUCERS),
    EffectsModule.forFeature([CharacterEffects]),
    CoreModule,
  ],
})
export class FlexCharactersCardModule {}
