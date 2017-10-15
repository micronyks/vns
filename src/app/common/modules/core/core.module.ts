import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthserviceService } from '../../services/authservice.service';
import { SharedService } from '../../services/shared.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthserviceService, SharedService]
})
export class CoreModule { }
