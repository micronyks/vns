import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { SharedService } from './common/services/shared.service';
import { MaterialModule } from './common/modules/material/material.module';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './common/modules/core/core.module';
import { SharedModule } from './common/modules/shared/shared.module';
import { ResumeComponent } from './components/resume/resume.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AgmCoreModule } from '@agm/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {

  var fixture;
  var app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[BrowserAnimationsModule,MaterialModule,RouterModule,AppRoutingModule,CoreModule,SharedModule,AgmCoreModule],
      declarations: [
        AppComponent,FooterComponent,ResumeComponent,HomeComponent,ContactComponent,PagenotfoundComponent
      ],
      providers: [
        { provide: Window, useValue: window },
        Location, 
        {provide: LocationStrategy, useClass: HashLocationStrategy },
        SharedService
      ],
    }).compileComponents();
  }));

  beforeEach(()=>{
    
     fixture = TestBed.createComponent(AppComponent);
     app = fixture.debugElement.componentInstance;
  })

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'nx'`, async(() => {
    expect(app.title).toEqual('nx');
  }));

  it(`should call hideLoader method from sharedService when AppComponent is initialized`,()=>{
    let service=TestBed.get(SharedService);
    let spy=spyOn(service,'hideLoader');

    app.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });


  it(`should call showLoader method from sharedService when AppComponent is destroyed`,()=>{
    let service=TestBed.get(SharedService);
    let spy=spyOn(service,'showLoader');
    
    app.ngDestroy();
    app=undefined;

    expect(spy).toHaveBeenCalled();
  });




});
