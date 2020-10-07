import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextPagesComponent } from './text-pages/text-pages.component';
import { TextBandeauComponent } from './text-bandeau/text-bandeau.component';



@NgModule({
  declarations: [TextPagesComponent, TextBandeauComponent],
  imports: [
    CommonModule
  ],
  exports: [TextPagesComponent, TextBandeauComponent]
})
export class TextModule { }
