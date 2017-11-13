import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { GuildInterface } from '../app/guild-interface'

@Injectable()
export class GuildSearchService {

  constructor(private http: Http) { }

  arrayUsers: GuildInterface[];
  getAll(guild: String, realm: String): Observable<GuildInterface[]> {
    return this.http.get(`https://us.api.battle.net/wow/guild/${realm}/${guild}?fields=members&locale=en_US&apikey=4aq73rmdfp746j669j2u33qw434pbtj3`).map((data) => {
      console.log(data);
      return data.json().rows;
    });
  }

}













