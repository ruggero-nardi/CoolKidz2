import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RealmInterface } from '../app/realm-interface'

@Injectable()
export class RealmStatusService {

  constructor(private http: Http) { }
  
    getAll(): Observable<RealmInterface[]> {
      return this.http.get(`https://us.api.battle.net/wow/realm/status?locale=en_US&apikey=4aq73rmdfp746j669j2u33qw434pbtj3`)
        .map((data) => {
          return data.json().realms;
        });
    }

}
