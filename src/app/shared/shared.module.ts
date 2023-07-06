import { NgModule } from '@angular/core';
import { SvgIconComponent } from './ui/svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './ui/header/header.component';

@NgModule({
  declarations: [SvgIconComponent, HeaderComponent],
  imports: [
    // General modules
    CommonModule,
  ],
  providers: [],
  exports: [SvgIconComponent, HeaderComponent],
})
export class SharedModule {}
