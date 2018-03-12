import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecmComponent } from './recm/recm.component';
import { BannerComponent } from '../banner/banner.component';
import { HomeComponent } from './home.component';
import { SliderRecmComponent } from './../component/sliderRecm/sliderRecm.component'

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        SliderRecmComponent,
        RecmComponent,
        BannerComponent,
        HomeComponent
    ],
    providers: []
})
export class HomeModule { }
