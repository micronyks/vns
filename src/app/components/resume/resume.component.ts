import {Component, OnInit, ViewEncapsulation, ViewChild, ElementRef }from '@angular/core'; 
import {ActivatedRoute, Router, NavigationEnd }from '@angular/router'; 
import {Observable }from 'rxjs/Observable'; 
import 'rxjs/add/operator/map'; 
import {SharedService }from '../../common/services/shared.service'; 
@Component( {
selector:'nx-resume', 
//    encapsulation:ViewEncapsulation.None,
templateUrl:'./resume.component.html', 
styleUrls:['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
//token: Observable<string>;

@ViewChild('print')printElement:ElementRef; 
constructor(private router:Router, private route:ActivatedRoute, private sharedService:SharedService ) {
// router.events.subscribe(event => {
//     if (event instanceof NavigationEnd) {
//         const tree = router.parseUrl(router.url);
//         if (tree.fragment) {
//       const element = document.querySelector("#" + tree.fragment);
//       debuggerdebugger
	  //       if (element) { element.scrollIntoView(element); }
    //         }
    //      }
    // });
   // this.scrollToAnchor('anchor', 100)  
  }


ngOnInit() {
this.sharedService.scrollToAnchor(); 
// Capture the session ID if available

// Capture the fragment if available
// this.token = this.route
//   .fragment
//   .map(fragment => fragment || 'None');
}

printResume() {
let printContents, popupWin;
    printContents = document.getElementById('print').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
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
