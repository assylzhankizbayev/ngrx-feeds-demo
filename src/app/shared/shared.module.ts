import { NgModule } from '@angular/core';
import { SvgIconComponent } from './ui/svg-icon/svg-icon.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SvgIconComponent],
  imports: [
    // General modules
    CommonModule,
  ],
  providers: [],
  exports: [SvgIconComponent],
})
export class SharedModule {}
