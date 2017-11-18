import { Component, OnInit } from '@angular/core';
import {
  HostBinding,
  } from '@angular/core';
import {
  trigger,
  transition,
  query,
  stagger,
  animate,
  style,
  keyframes
} from '@angular/animations';
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
          // style({
          //   opacity: 0,
          //   transform: 'translateY(100%)'
          // }),
          // animate('1s ease-in')
          query('.myMap', style({
            opacity: 0
          }), {
            optional: true
          }),
           query('.myInformation', style({
          opacity: 0
        }), {
          optional: true
        }),

        query('.myInformation', stagger('0ms', [
          
                    // animate('1s ease',style({opacity:1, transform: 'rotate(360deg)'}))
          
                    animate('.1s ease',style({opacity: 1,
                      }))
                  ]), {
                    optional: true
                  }),

          

          query('.myMap', stagger('0ms', [
            
                       //animate('1s ease',style({opacity:1, transform: 'rotate(360deg)'}))
            
                      animate('1s ease-out', keyframes([
                        style({
                          opacity: 0,
                          transform: 'scale(0)',

                          offset: 0
                        }),
                       
                        style({
                          opacity: 1,
                          transform: 'scale(1)',
                          background:'pink',
                          offset: 1 
                        }),
                      ])
                    )
                  ])
                )
          
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
  zoom: number = 10;
  lat: number =12.950120;
  lng: number = 77.720215;

  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  constructor() { }

  ngOnInit() {
  }

}
