import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef }from '@angular/core'; 
import {ActivatedRoute, Router, NavigationEnd }from '@angular/router'; 
import {Observable }from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import {SharedService }from '../../common/services/shared.service'; 
import {
  HostBinding,
  trigger, transition, animate,
  style, state
} from '@angular/core';
import { ModalComponent } from '../../common/components/modal/modal.component';



@Component({
selector:'nx-resume', 
//    encapsulation:ViewEncapsulation.None,
templateUrl:'./resume.component.html', 
styleUrls:['./resume.component.scss'],
animations: [
  trigger('routeAnimation', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-100%)'
      }),
      animate('1s ease-in-out')
    ]),
    transition(':leave', [
      animate('1s ease-in-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ])
]
})




export class ResumeComponent {
//token: Observable<string>;
@ViewChild(ModalComponent) public readonly modal: ModalComponent;
@HostBinding('@routeAnimation') get routeAnimation() {
  return true;
}

@ViewChild('print')printElement:ElementRef; 


  constructor(private router:Router, private route:ActivatedRoute, private sharedService:SharedService ) {
    console.log('resume component')
  }




  ngAfterViewInit(){
    setTimeout(()=> {
      this.modal.show(); 
    }, 1000);
      
  }

  printResume() {
    let printContents, popupWin;
      printContents = document.getElementById('print').innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=600');
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <title>Print tab</title>
            <style>
              .lightBlue {
                background-color: lightblue !important;
              }

              @media print {
                .lightBlue {
                  background-color: lightblue !important;
                  -webkit-print-color-adjust: exact;
                }
              }
            </style>
          </head>
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`
      );
      popupWin.document.close();
  }
}
