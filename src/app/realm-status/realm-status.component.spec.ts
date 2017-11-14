import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmStatusComponent } from './realm-status.component';

describe('RealmStatusComponent', () => {
  let component: RealmStatusComponent;
  let fixture: ComponentFixture<RealmStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
