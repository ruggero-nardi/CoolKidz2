import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { PlayerSearchService } from '../../player-search.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
   
})
export class InputSearchComponent implements OnInit {



  constructor(private playerSearchService: PlayerSearchService) { }

  ngOnInit() {
  }
  search(charString, realmString){
    this.playerSearchService.searchPlayer(charString, realmString);
  }
}
