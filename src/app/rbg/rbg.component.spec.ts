import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbgComponent } from './rbg.component';

describe('RbgComponent', () => {
  let component: RbgComponent;
  let fixture: ComponentFixture<RbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
