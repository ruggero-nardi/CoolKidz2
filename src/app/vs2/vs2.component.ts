import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { LeaderBoardService } from '../leader-board.service';
import { vs } from '../vs';

@Component({
  selector: 'app-vs2',
  templateUrl: './vs2.component.html',
  styleUrls: ['./vs2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Vs2Component implements OnInit {

  arrayUsers: vs[];
  constructor( private LeaderBoardService:LeaderBoardService) { }

  ngOnInit() { 
  }
 
  search() {
    this.LeaderBoardService.getAll('2v2').subscribe(arrayUsers => {
      this.arrayUsers=arrayUsers;
      console.log(arrayUsers);
    })
  }

}