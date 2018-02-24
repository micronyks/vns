import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'nx-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  visible = false;
  model = {};
  public visibleAnimate = false;
  showErrorMsg = false;
  constructor() { }

  ngOnInit() {
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => {
      this.visibleAnimate = true;
    });
  }

  public hide(event: any): void {
    event.stopPropagation();
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  checkPassword(password, event) {
    if (password === 'nyks') {
      this.hide(event);
    } else {
      this.showErrorMsg = true;
    }
  }
}
