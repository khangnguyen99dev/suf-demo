import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
