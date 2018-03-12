import { Component, OnInit, Input } from '@angular/core';
import { SliderRecmComponentService } from './sliderRecm.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-sliderrecm',
  templateUrl: './sliderRecm.component.html',
  styleUrls: ['./sliderRecm.component.css'],
  providers: [SliderRecmComponentService]
})
export class SliderRecmComponent implements OnInit {
  private inputData;
  private imgs;
  private transAllDisInter;

  constructor(private sliderRecmComponentService: SliderRecmComponentService) {

  }

  @Input()
  set data(data) {
    this.inputData = data;
  }

  ngOnInit() {
    this.imgs = this.inputData['Imgs'];
    console.log(this.imgs);
  }

  clickLeft() {
    let ul = document.getElementById('transUl');
    ul.style.transform = 'translate(' + (-1080) + 'px, 0px)';
    ul.style.transition = 'all 1s linear';
  }

  clickRight() {
    let ul = document.getElementById('transUl');
    ul.style.transform = 'translate(' + 1080 + 'px, 0px)';
    ul.style.transition = 'all 1s linear';
  }

}
