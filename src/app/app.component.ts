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
  @ViewChild('nav') navEle:ElementRef;

  @ViewChild('sidenav') sidenav;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
  }
  
  constructor(private rd: Renderer2,
    private router: Router,
    // private route: ActivatedRouteSnapshot,
    // private state: RouterStateSnapshot,
    private sharedService: SharedService) {
      this.windowWidth=window.innerWidth;
    this.windowHeight=window.innerHeight;
    this.technologyDivHeight = (window.innerHeight - 60) / 4;
    console.log('window width is '+ this.windowWidth);
  }

  title = 'nx';

  
  ngOnInit(){}

  ngAfterViewInit(){
      
  }


  navigateTo(to: string) {
    // let navigationExtras: NavigationExtras = {
    //   fragment: 'anchor '
    // };
    if (to != "home") {
      this.sharedService.fragment = "anchor";
    } else {
      this.sharedService.fragment = "headerAnchor";
    }
    this.router.navigate([to]);

  }

}
