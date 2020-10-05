import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { IconsModule } from '../icons/icons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    UiModule,
    TemplatesModule,
    TextModule,
    IconsModule
  ]
})
export class CoreModule { }
