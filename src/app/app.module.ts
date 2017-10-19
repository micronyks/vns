import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router,Routes, RouterModule} from '@angular/router';
import {Location, LocationStrategy, PathLocationStrategy,HashLocationStrategy} from '@angular/common';


import { AppComponent } from './app.component';
import { CoreModule } from './common/modules/core/core.module';
import { SharedModule } from './common/modules/shared/shared.module';
import { MaterialModule } from './common/modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ResumeComponent } from './components/resume/resume.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HomeComponent, 
    PagenotfoundComponent, FooterComponent, ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpVrD7HCGb4nhUtr9WZwO9ARo6OfboLuY'
    })
  ],
  providers: [
    { provide: Window, useValue: window },
    Location, 
    {provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})  
export class AppModule { }
