import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastComponent } from './breakfast.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BreakfastComponent', () => {
  let component: BreakfastComponent;
  let fixture: ComponentFixture<BreakfastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BreakfastComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
