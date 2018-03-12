import { Component } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls:  ['./head.component.css']
})
export class HeadComponent {
  private headerPage = ['Home', 'OnDemand', 'LiveTV'];
  private shoDrop = false;


  mouseenter() {
    this.shoDrop = true;
  }

  mouseleave() {
    this.shoDrop = false;
  }
}
