import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmedicinesComponent } from './searchmedicines.component';

describe('SearchmedicinesComponent', () => {
  let component: SearchmedicinesComponent;
  let fixture: ComponentFixture<SearchmedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchmedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
