import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TemplatesModule,
    TextModule,
    ButtonComponent
  ]
})
export class SharedModule { }
