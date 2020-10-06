import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { UiComponent } from './components/ui/ui.component';



@NgModule({
  declarations: [UiComponent],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
