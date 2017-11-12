import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css'],
   
})
export class InputSearchComponent implements OnInit {

  private searchString: string; 

  constructor(private http:Http) { }

  ngOnInit() {
  }
  search(){
    let response;
    let realm = 'Ragnaros';
    let search = this.searchString;
    this.http.get('https://us.api.battle.net/wow/character/'+realm+'/'+search+'?locale=en_US&apikey=4aq73rmdfp746j669j2u33qw434pbtj3').subscribe(data => {
      response = JSON.parse(data['_body']);
      console.log(response);
    })
  }
}
