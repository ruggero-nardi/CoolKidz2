import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { GuildSearchService } from '../guild-search.service'
import { GuildInterface } from '../guild-interface'
@Component({
  selector: 'app-guild-search',
  templateUrl: './guild-search.component.html',
  styleUrls: ['./guild-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GuildSearchComponent implements OnInit {

  

  arrayUsers: GuildInterface[];
  constructor( private GuildSearchService:GuildSearchService) { }

  ngOnInit() {
  }

  search(guildString, realmString) {
    this.GuildSearchService.getAll(guildString, realmString).subscribe(arrayUsers => {
      this.arrayUsers=arrayUsers;
      console.log(arrayUsers);
    })
  }

}
