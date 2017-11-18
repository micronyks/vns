import { Component, ViewEncapsulation, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { SharedService } from './common/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-root',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  windowHeight:number;
  technologyDivHeight:number;
  windowWidth:number;
  title = 'nx';

  @ViewChild('nav') navEle:ElementRef;
  @ViewChild('sidenav') sidenav;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
  }
  
  constructor(private sharedService: SharedService) {
    this.windowWidth=window.innerWidth;
    this.windowHeight=window.innerHeight;
    this.technologyDivHeight = (window.innerHeight - 60) / 4;
  }

  ngOnInit(){
    this.sharedService.hideLoader();
  }

  ngAfterViewInit(){
    
    setTimeout(()=>{
      this.sidenav.opened=true;  
    }, 100);
    
  }

  ngDestroy(){
    this.sharedService.showLoader();
  }

}
