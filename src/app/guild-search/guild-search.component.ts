import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { GuildSearchService } from '../guild-search.service';
import { GuildInterface } from '../guild-interface';
import { GuildMembers } from '../guild-members';

@Component({
  selector: 'app-guild-search',
  templateUrl: './guild-search.component.html',
  styleUrls: ['./guild-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GuildSearchComponent implements OnInit {



  guild: GuildInterface;
  arrayMembers: GuildMembers[];
  constructor(private GuildSearchService: GuildSearchService) { }

  ngOnInit() {
  }

  search(guildString, realmString) {
    this.GuildSearchService.getGuild(guildString, realmString).subscribe(guild => {
      this.guild = guild;
      this.arrayMembers = guild.members;
    })
  }

}
