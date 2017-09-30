import { Component, OnInit, Output, EventEmitter, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core'; 

@Component( {
selector:'nx-header', 
templateUrl:'./header.component.html', 
styleUrls:['./header.component.scss']
})
export class HeaderComponent implements OnInit {

@Output()sideNavToggle = new EventEmitter(); 
@ViewChild('nav') navEle:ElementRef; 
@HostListener('window:scroll', ['$event'])
onWindowScroll($event:any) {

if (window.scrollY > 300) {
  this.rd.addClass(this.navEle.nativeElement,"fixed-header");
}

}

constructor(private rd:Renderer2) {}

ngOnInit() {
}

buttonToggle() {
//emit is required in order to call sidenav.toggle method in parent component
this.sideNavToggle.emit(); 
}

}
