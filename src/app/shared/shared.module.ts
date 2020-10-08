import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { ButtonComponent } from './components/button/button.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';



@NgModule({
  declarations: [ButtonComponent, TableauLightComponent, TotalPipe, StateDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TemplatesModule,
    TextModule,
    ButtonComponent,
    TableauLightComponent,
    TotalPipe,
    StateDirective
  ]
})
export class SharedModule { }
