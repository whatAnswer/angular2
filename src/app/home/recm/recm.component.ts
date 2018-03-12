import { Component, OnInit } from '@angular/core';
import { RecmComponentService } from './recm.service';
import { SliderRecmComponent } from '../../component/sliderRecm/sliderRecm.component'
import * as _ from 'underscore';

@Component({
  selector: 'app-recm',
  templateUrl: './recm.component.html',
  styleUrls: ['./recm.component.css'],
  providers: [RecmComponentService]
})
export class RecmComponent implements OnInit {

  private tranlateData;

  constructor(private recmComponentService: RecmComponentService) {

  }
  ngOnInit() {
      this.tranlateData = this.recmComponentService.getDate();
  }
}
