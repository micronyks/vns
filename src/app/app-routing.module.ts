import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router,Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { AuthGuardService } from './common/services/authservice.service';
const appRoutes: Routes = [
  { 
    path: 'resume', 
    component: ResumeComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'home', component: HomeComponent },
  {path:'contact', component:ContactComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({   
  imports: [
    RouterModule.forRoot(  appRoutes, //  { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
