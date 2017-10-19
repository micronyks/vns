import { Component, OnInit } from '@angular/core';
import {
  HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
@Component({
  selector: 'nx-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('routeAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(100%)'
        }),
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          opacity: 0,
          transform: 'translateY(-100%)'
        }))
      ])
    ])
  ]
})
export class ContactComponent implements OnInit {
  zoom: number = 18;
  lat: number =12.960117;
  lng: number = 77.720215;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
