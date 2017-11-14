import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { LeaderBoardService } from '../leader-board.service'
import { vs } from '../vs'

@Component({
  selector: 'app-vs3',
  templateUrl: './vs3.component.html',
  styleUrls: ['./vs3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Vs3Component implements OnInit {

  arrayUsers: vs[];
  constructor( private LeaderBoardService:LeaderBoardService) { }

  ngOnInit() {
    this.LeaderBoardService.getAll('3v3').subscribe(arrayUsers => {
      this.arrayUsers=arrayUsers;
    })
  }
}
