import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nx-about',
  encapsulation:ViewEncapsulation.None,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  windowWidth:number;
  constructor() {
    this.windowWidth=window.innerWidth;
  }

  ngOnInit() {
  }

}
