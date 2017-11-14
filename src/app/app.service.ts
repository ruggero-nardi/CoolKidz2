import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppService {

    public races;
    public classes;
    public achievements;  

    constructor(private http: Http) { }
    
    getBasicData(){
        this.http.get('https://us.api.battle.net/wow/data/character/races?locale=en_US&apikey=4aq73rmdfp746j669j2u33qw434pbtj3').subscribe(response=>{
            this.races = JSON.parse(response['_body']).races;
          });
          this.http.get('https://us.api.battle.net/wow/data/character/classes?locale=en_US&apikey=4aq73rmdfp746j669j2u33qw434pbtj3').subscribe(response=>{
            this.classes = JSON.parse(response['_body']).classes;
          });
          this.http.get('https://us.api.battle.net/wow/data/character/achievements?locale=en_US&apikey=4aq73rmdfp746j669j2u33qw434pbtj3').subscribe(response=>{
            this.achievements = JSON.parse(response['_body']).achievements;
          })
    }
}