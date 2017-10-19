import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [LoginComponent, ModalComponent],
  exports:[LoginComponent, ModalComponent]
})
export class SharedModule { }
