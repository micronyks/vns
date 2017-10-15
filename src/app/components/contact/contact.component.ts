import { Component, OnInit } from '@angular/core';
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
@Component({
  selector: 'nx-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  zoom: number = 18;
  lat: number =12.960117;
  lng: number = 77.720215;

  constructor() { }

  ngOnInit() {
  }

}
