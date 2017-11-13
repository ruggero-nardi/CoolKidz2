import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vs3Component } from './vs3.component';

describe('Vs3Component', () => {
  let component: Vs3Component;
  let fixture: ComponentFixture<Vs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
