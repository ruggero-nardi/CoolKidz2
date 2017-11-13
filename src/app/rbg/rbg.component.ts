import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LeaderBoardService } from '../leader-board.service'
import { vs } from '../vs'

@Component({
  selector: 'app-rbg',
  templateUrl: './rbg.component.html',
  styleUrls: ['./rbg.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RbgComponent implements OnInit {

  arrayUsers: vs[];
  constructor( private LeaderBoardService:LeaderBoardService) { }

  ngOnInit() { 
  }
 
  search() {
    this.LeaderBoardService.getAll('rbg').subscribe(arrayUsers => {
      this.arrayUsers=arrayUsers;
      console.log(arrayUsers);
    })
  }

}