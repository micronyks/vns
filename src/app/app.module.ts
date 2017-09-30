import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './common/modules/core/core.module';
import { SharedModule } from './common/modules/shared/shared.module';
import { MaterialModule } from './common/modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResumeComponent } from './components/resume/resume.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerComponent } from './components/container/container.component';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent, 
    PagenotfoundComponent, HeaderComponent, FooterComponent, ContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [{ provide: Window, useValue: window }],
  bootstrap: [AppComponent]
})  
export class AppModule { }
