import { Component, OnInit, OnDestroy } from '@angular/core';
import { BannerComponentService } from './banner.service';
import * as _ from 'underscore';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls:  ['./banner.component.css'],
  providers: [BannerComponentService]
})

export class BannerComponent implements OnInit, OnDestroy {
  private bannerImgs;
  private bannerImg;
  private bannerIntervar;
  private smallBannerInterbal;
  private index = 0;
  private verticalScrollDiv;
  private smallBannerOffer = 0;

  constructor(private bannerComponentService: BannerComponentService) {

  }

  ngOnInit() {
      this.bannerImgs = this.bannerComponentService.bannerImgs;
      this.bannerImg = this.bannerImgs[0];
      this.startBanner();
      this.startSmallBaaner();
  }

  startBanner() {
      this.bannerIntervar = setInterval(() => {
          this.index++;
          if (this.index === 6) {
            this.index = 0;
          }
          this.bannerImg = this.bannerImgs[this.index];
      }, 3000);
  }

  startSmallBaaner() {
      this.smallBannerInterbal = setInterval(() => {
          this.smallBannerOffer = Number(this.smallBannerOffer) - 73;
          if (this.smallBannerOffer === -438) {
              this.smallBannerOffer = 0;
          }
          this.verticalScrollDiv = document.getElementById('verticalScrollDiv');
          this.verticalScrollDiv.style.transform = 'translate(0px,' + this.smallBannerOffer + 'px)';
          this.verticalScrollDiv.style.transition = 'all 1s linear';
      }, 3000);
  }

  ngOnDestroy() {
      clearInterval(this.bannerIntervar);
      clearInterval(this.smallBannerInterbal);
  }
}
