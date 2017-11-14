import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PlayerSearchService } from '../player-search.service';
import { Router } from '@angular/router';
import { Player } from '../player';
import { AppService } from '../app.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerDetailsComponent implements OnInit {

  private playerInfo: Player = {
    "lastModified": undefined,
    "name": undefined,
    "realm": undefined,
    "battlegroup": undefined,
    "class": undefined,
    "race": undefined,
    "gender": undefined,
    "level": undefined,
    "achievementPoints": undefined,
    "thumbnail": undefined,
    "calcClass": undefined,
    "faction": undefined,
    "totalHonorableKills": undefined
  };

  constructor(
    private playerSearchService: PlayerSearchService,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    if (this.playerSearchService.playerDetails) {
      this.playerInfo = this.playerSearchService.playerDetails;
      this.setCharacterClass();
      this.setCharacterRace();
    } else {
      this.router.navigate(['']);
    }
  }

  setCharacterClass() {
    let classObject = this.appService.classes.find(element => element.id === this.playerInfo.class);
    this.playerInfo.class = classObject.name;
  }
  setCharacterRace() {
    let raceObject = this.appService.races.find(element => element.id === this.playerInfo.race);
    this.playerInfo.race = raceObject.name;
  }

}
