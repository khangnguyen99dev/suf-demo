import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';


@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioComponent
  ],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
