import { MoedaService } from './services/moeda.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components/conversor.component';
import { ConversorService } from './services/conversor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConversorComponent
  ],
  exports: [
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
