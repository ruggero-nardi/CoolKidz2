import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { InputSearchComponent } from './header/input-search/input-search.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';
import { Vs2Component } from './vs2/vs2.component'
import { Vs3Component } from './vs3/vs3.component'
import { LeaderBoardService } from './leader-board.service';
import { RbgComponent } from './rbg/rbg.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    InputSearchComponent,
    NavigationBarComponent,
    Vs2Component,
    Vs3Component,
    RbgComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LeaderBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
