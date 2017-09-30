import { Component, ViewEncapsulation, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'nx-root',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('nav') navEle:ElementRef; 
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event:any) {
  console.log('app component scroll')
  if (window.scrollY > 300) {
    this.rd.addClass(this.navEle.nativeElement,"fixed-header");
  }
  else{
    this.rd.removeClass(this.navEle.nativeElement,"fixed-header");
  }
  
  }
  
  constructor(private rd:Renderer2) {
    console.log('app component constructor')
  }

  title = 'nx';

  
  ngOnInit(){}

  ngAfterViewInit(){

  }

}
