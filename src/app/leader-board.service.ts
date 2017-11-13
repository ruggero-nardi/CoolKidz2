import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import  { vs } from '../app/vs'

@Injectable()
export class LeaderBoardService {



  constructor(private http: Http) { }

  arrayUsers: vs [];
  getAll(rank: String): Observable<vs[]> {
    return this.http.get(`https://us.api.battle.net/wow/leaderboard/${rank}?locale=en_US&apikey=4aq73rmdfp746j669j2u33qw434pbtj3`)
      .map(function (data) {
        return data.json().rows;
      });
  }
}
