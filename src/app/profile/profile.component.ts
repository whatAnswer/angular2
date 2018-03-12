import { Component } from '@angular/core';
import { CommonComponentService } from '../common/common.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls:  ['./profile.component.css'],
  providers: [CommonComponentService]
})
export class ProfileComponent {
  private defaultLogStr = 'Login';

  constructor(
    private commonComponentService: CommonComponentService
  ) {

  }

  clickLogin() {
    this.commonComponentService.resetShowLoginBox();
  }
}
