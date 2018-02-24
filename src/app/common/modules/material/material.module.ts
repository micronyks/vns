import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NgModule }      from '@angular/core';
// import {ObserveContentModule} from '@angular/cdk/observe-content';


// import {MdButtonModule, MdCheckboxModule,MdButton} from '@angular/material';

// @NgModule({
//   imports: [ MdButtonModule,MdButtonModule,MdButton],
//   exports: [MdButtonModule,MdButtonModule,MdButton],
// })
// export class CustomMaterialModule { }


import {  ModuleWithProviders } from '@angular/core';

import { MatButtonModule } from '@angular/material';
// import {MdIconModule} from '@angular2-material/icon';
 import {MatMenuModule} from '@angular/material';
// import {MdIconRegistry} from '@angular2-material/icon';
// import {OverlayModule } from '@angular2-material/core';
//import {MdButtonToggleModule} from '@angular2-material/button-toggle/button-toggle';
//import {MdProgressCircleModule} from '@angular2-material/progress-circle/progress-circle';
//import {MdProgressBarModule} from '@angular2-material/progress-bar/progress-bar';
//import {MdInputModule} from '@angular2-material/input';
//import {MdTabsModule} from '@angular2-material/tabs/tabs';
//import {MdToolbarModule} from '@angular2-material/toolbar'; 
//import {MdTooltipModule} from '@angular2-material/tooltip/tooltip';
//import {MdRippleModule} from '@angular2-material/core/ripple/ripple';
//import {PortalModule} from '@angular2-material/core/portal/portal-directives';
//import {OverlayModule} from '@angular2-material/overlay';
//import {RtlModule} from '@angular2-material/core/rtl/dir';
//import {MdCheckboxModule} from '@angular2-material/checkbox/checkbox';
//import {MdRadioModule} from '@angular2-material/radio/radio';
//import {MdSlideToggleModule} from '@angular2-material/slide-toggle/slide-toggle';
//import {MdSliderModule} from '@angular2-material/slider/slider';
import {MatSidenavModule} from '@angular/material';
////import {MdListModule} from '@angular2-material/list/list';
//import {MdGridListModule} from '@angular2-material/grid -list/grid-list';
import {MatCardModule, MatExpansionModule} from '@angular/material';
//import {ModalOpenDirective} from './myDirective';
const MATERIAL_MODULES = [
  MatButtonModule,
  // MdIconModule,
   MatMenuModule,
   MatSidenavModule,
   MatExpansionModule,
  // MdToolbarModule,
  MatCardModule,
  // MdInputModule
  //MdSliderModule,
  //MdSlideToggleModule
]; 

@NgModule({
  imports: [
    MatButtonModule  ,
    // MdIconModule.forRoot(),
     MatMenuModule   ,
     MatExpansionModule,
    // MdSidenavModule.forRoot(),
    // MdToolbarModule.forRoot(),
    // MdIconModule.forRoot(),
     MatCardModule,
    // MdInputModule.forRoot(),
    //MdSliderModule.forRoot(),
    //MdSlideToggleModule.forRoot(),
    //OverlayModule.forRoot(),
  ],
  declarations: [],
  exports: [MATERIAL_MODULES]
})
export class MaterialRootModule { }

//****************************************************************************************/
@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MaterialRootModule
    }
  }
}
