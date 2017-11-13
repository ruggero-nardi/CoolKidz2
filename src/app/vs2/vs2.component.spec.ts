import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vs2Component } from './vs2.component';

describe('Vs2Component', () => {
  let component: Vs2Component;
  let fixture: ComponentFixture<Vs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
