import { Component, OnInit } from '@angular/core';

import { PlayPageComponentService } from './playPage.service';

@Component({
  selector: 'app-playpage',
  templateUrl: './playpage.component.html',
  styleUrls:  ['./playpage.component.css'],
  providers: [PlayPageComponentService]
})

export class PlayPageComponent implements OnInit {

  private channelNames = [];
  constructor(private playPageComponentService: PlayPageComponentService) {

  }
  ngOnInit() {
    this.channelNames = this.playPageComponentService['channelNames'];
  }

}
