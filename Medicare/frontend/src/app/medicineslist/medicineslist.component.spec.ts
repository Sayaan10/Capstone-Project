import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineslistComponent } from './medicineslist.component';

describe('MedicineslistComponent', () => {
  let component: MedicineslistComponent;
  let fixture: ComponentFixture<MedicineslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
