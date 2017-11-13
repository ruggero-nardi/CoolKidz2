import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildSearchComponent } from './guild-search.component';

describe('GuildSearchComponent', () => {
  let component: GuildSearchComponent;
  let fixture: ComponentFixture<GuildSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
