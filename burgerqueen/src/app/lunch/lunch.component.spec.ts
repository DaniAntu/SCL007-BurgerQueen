import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunchComponent } from './lunch.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LunchComponent', () => {
  let component: LunchComponent;
  let fixture: ComponentFixture<LunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LunchComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
