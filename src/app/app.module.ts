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
import { RbgComponent } from './rbg/rbg.component';
import { GuildSearchComponent } from './guild-search/guild-search.component'
import { GuildSearchService } from './guild-search.service';
import { RealmStatusComponent } from './realm-status/realm-status.component'
import { RealmStatusService } from './realm-status.service';
import { PlayerDetailsComponent } from './player-details/player-details.component'
import { PlayerSearchService } from './player-search.service';
import { PlayerNotFoundComponent } from './player-not-found/player-not-found.component';
import { AppService } from './app.service';



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
    RbgComponent,
    GuildSearchComponent,
    RealmStatusComponent,
    PlayerDetailsComponent,
    PlayerNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LeaderBoardService, GuildSearchService, RealmStatusService, PlayerSearchService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
