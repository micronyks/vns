import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../../services/authservice.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthserviceService]
})
export class CoreModule { }
