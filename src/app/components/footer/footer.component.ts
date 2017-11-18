import { Component, OnInit,VERSION } from '@angular/core';

@Component({
  selector: 'nx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  version:string;
  constructor() {
    this.version=`Angular! v${VERSION.full}`
   }

  ngOnInit() {
  }

}
