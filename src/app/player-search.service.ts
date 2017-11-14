import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class PlayerSearchService {

  public playerDetails;

  constructor(private http: Http, private router: Router) { }

  public searchPlayer(charString, realmString){
    let response;
    
        this.http.get('https://us.api.battle.net/wow/character/'+realmString+'/'+charString+'?locale=en_US&apikey=4aq73rmdfp746j669j2u33qw434pbtj3').subscribe(data => {
          this.playerDetails = JSON.parse(data['_body']);
          this.router.navigate(['player-details']);
        },
        () => {
          this.router.navigate(['player-not-found']);
        });
  }

}
