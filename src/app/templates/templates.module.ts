import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TextModule } from '../text/text.module';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { TemplateFullwidthComponent } from './template-fullwidth/template-fullwidth.component';



@NgModule({
  declarations: [TemplateFullwidthComponent, TemplateContainerComponent],
  imports: [
    CommonModule,
    TextModule
  ],
  exports: [TemplateFullwidthComponent, TemplateContainerComponent],
})
export class TemplatesModule { }
