import { Component } from '@angular/core';
import { HeadComponent } from './header/head.component';
import { CommonComponentService } from './common/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonComponentService]
})
export class AppComponent {

  private isShowLogin = false;
  constructor(
    private commonComponentService: CommonComponentService
  ) {
    this.isShowLogin = this.commonComponentService.showLoginBox;
  }
}
