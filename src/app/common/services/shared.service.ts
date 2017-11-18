import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  public fragment:string;
  private element:any;
  loader:boolean=true;

  constructor() { }

  public showLoader():void{
    this.loader=true;
  }
  public hideLoader():void{
    this.loader=false;
  }

  public scrollToAnchor(): void {
    if(this.fragment){
      this.element = document.querySelector('#' + this.fragment)
      if (this.element) {
        setTimeout(() => {
          this.element.scrollIntoView({behavior: 'instant', block: 'start', inline: 'nearest'})
        }, 200)
      }
    }
    else{
      this.element = document.querySelector('#' + 'headerAnchor')
      setTimeout(() => {
        this.element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
      }, 200)
    }
  }

}
