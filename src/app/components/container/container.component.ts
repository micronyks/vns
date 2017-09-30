import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'nx-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
  console.log('n')
  }

  constructor() { }

  ngOnInit() {
  }

}
