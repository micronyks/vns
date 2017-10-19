import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from '../../services/authservice.service';
import { SharedService } from '../../services/shared.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [AuthGuardService, SharedService]
})
export class CoreModule { }
