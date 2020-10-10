import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipe/pipe.module';
import { ModalTrailerComponent } from '../component/modal-trailer/modal-trailer.component';

@NgModule({
  declarations: [ModalTrailerComponent],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    ModalTrailerComponent
  ]
})
export class SharingModule { }
