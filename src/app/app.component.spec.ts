import {
  TestBed,
  async
} from '@angular/core/testing';

import {
  AppComponent
} from './app.component';
import {
  SharedService
} from './common/services/shared.service';
import {
  MaterialModule
} from './common/modules/material/material.module';
import {
  FooterComponent
} from './components/footer/footer.component';
import {
  AppRoutingModule,
  appRoutes
} from './app-routing.module';
import {
  RouterModule
} from '@angular/router';
import {
  CoreModule
} from './common/modules/core/core.module';
import {
  SharedModule
} from './common/modules/shared/shared.module';
import {
  ResumeComponent
} from './components/resume/resume.component';
import {
  HomeComponent
} from './components/home/home.component';
import {
  ContactComponent
} from './components/contact/contact.component';
import {
  PagenotfoundComponent
} from './components/pagenotfound/pagenotfound.component';
import {
  AgmCoreModule
} from '@agm/core';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  By
} from '@angular/platform-browser';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {
  RouterOutlet,
  Router,
  RouterLinkWithHref
} from '@angular/router';
import {
  AboutComponent
} from './components/about/about.component';
import {
  debug
} from 'util';

describe('AppComponent', () => {

  let fixture;
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        // RouterModule.forRoot(appRoutes),
        RouterTestingModule.withRoutes([]),
        AppRoutingModule,
        CoreModule,
        SharedModule,
        AgmCoreModule
      ],
      declarations: [
        AppComponent,
        FooterComponent,
        ResumeComponent,
        HomeComponent,
        ContactComponent,
        PagenotfoundComponent,
        AboutComponent
      ],
      providers: [{
          provide: Window,
          useValue: window
        },
        Location, {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
        },
        SharedService
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  // routing related testing: start

 

  it(`should have as title 'nx'`, async(() => {
    expect(app.title).toEqual('nx');
  }));

  it(`should call hideLoader method from sharedService when AppComponent is initialized`, () => {
    let service = TestBed.get(SharedService);
    let spy = spyOn(service, 'hideLoader');

    app.ngOnInit();

    expect(spy).toHaveBeenCalled();
  });


  it(`should call showLoader method from sharedService when AppComponent is destroyed`, () => {
    let service = TestBed.get(SharedService);
    let spy = spyOn(service, 'showLoader');

    app.ngDestroy();
    app = undefined;

    expect(spy).toHaveBeenCalled();
  });


  describe('routes', () => {

    it('should contain /contact route', () => {
      expect(appRoutes).toContain({
        path: 'contact',
        component: ContactComponent
      });
    });

    xit('should have RouterOutlet', async(() => {
      const de = fixture.debugElement.query(By.directive(RouterOutlet));
      expect(de).not.toBeNull();
    }))

    it('AppPage should have a router link named home', async(() => {
      let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

      let index = debugElements.findIndex(x => x.properties['href']==='#/home');
      expect(index).toBeGreaterThan(-1);
    }))
    
  })

  
  // routing related testing: end

  




});
