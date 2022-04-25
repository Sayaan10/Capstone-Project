import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovemedicineComponent } from './removemedicine.component';

describe('RemovemedicineComponent', () => {
  let component: RemovemedicineComponent;
  let fixture: ComponentFixture<RemovemedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovemedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovemedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
