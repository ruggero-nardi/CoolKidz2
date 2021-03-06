import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';
import { RealmStatusService } from '../realm-status.service';
import { RealmInterface } from '../realm-interface';

@Component({
  selector: 'app-realm-status',
  templateUrl: './realm-status.component.html',
  styleUrls: ['./realm-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RealmStatusComponent implements OnInit {

  arrayRealms: RealmInterface[];
  constructor(private RealmStatusService: RealmStatusService) { }

  ngOnInit() {
  }

  search() {
    this.RealmStatusService.getAll().subscribe(arrayRealms => {
      this.arrayRealms = arrayRealms;
    })
  }
}





