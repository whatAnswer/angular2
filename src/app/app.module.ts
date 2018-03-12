import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { PlayPageModule } from './PlayPage/PlayPage.module';

import { AppComponent } from './app.component';
import { HeadComponent } from './header/head.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { LanguageComponent } from './language/language.component';
import { FootComponent } from './foot/foot.component';
import { LoginComponent } from './login/login.component';


import { CommonComponentService } from './common/common.service';

import { ENV_PROVIDERS } from './environment';

import '../styles.css';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    PlayPageModule
    // RouterModule.forRoot(ROUTES, {
    //   useHash: Boolean(history.pushState) === false,
    //   preloadingStrategy: PreloadAllModules
    // })
  ],
  declarations: [
    AppComponent,
    HeadComponent,
    SearchComponent,
    ProfileComponent,
    LanguageComponent,
    FootComponent,
    LoginComponent
  ],
  providers: [ENV_PROVIDERS, CommonComponentService],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(
    // public appRef: ApplicationRef,
    // public appState: AppState
  ) { }

}
