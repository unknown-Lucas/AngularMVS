import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterFilterPipe } from './pipes/character-filter.pipe';



@NgModule({

  declarations: [
    CharacterFilterPipe
  ],
  imports: [
   BrowserAnimationsModule,
   CommonModule,
   LayoutModule,
  ],
  exports:[RouterModule, CharacterFilterPipe]
})
export class CoreModule { }
