import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    MatInputModule,
  ]
})
export class RegistrationModule { }
