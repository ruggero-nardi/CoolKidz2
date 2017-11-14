import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { Vs2Component } from './vs2/vs2.component';
import { Vs3Component } from './vs3/vs3.component';
import { RbgComponent } from './rbg/rbg.component';
import { GuildSearchComponent } from './guild-search/guild-search.component'
import { RealmStatusComponent } from './realm-status/realm-status.component'
import { PlayerDetailsComponent } from "./player-details/player-details.component";
import { PlayerNotFoundComponent } from './player-not-found/player-not-found.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'vs2', component: Vs2Component },
  { path: 'vs3', component: Vs3Component },
  { path: 'rbg', component: RbgComponent},
  { path: 'guild-search', component: GuildSearchComponent },
  { path: 'realm-status', component: RealmStatusComponent},
  { path: 'player-details', component: PlayerDetailsComponent},
  { path: 'player-not-found', component: PlayerNotFoundComponent },
  { path: '**', component: MainContentComponent }
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }