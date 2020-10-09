import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { ButtonComponent } from './components/button/button.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { SubnavComponent } from './components/subnav/subnav.component';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [ButtonComponent, TableauLightComponent, TotalPipe, StateDirective, TableauDarkComponent, SubnavComponent],
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
    StateDirective,
    ReactiveFormsModule,
    TableauDarkComponent,
    SubnavComponent,
    IconsModule
  ]
})
export class SharedModule { }
