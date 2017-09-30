import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'nx-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    console.log('home')
  }

  constructor() { }

  ngOnInit() {
  }

}
