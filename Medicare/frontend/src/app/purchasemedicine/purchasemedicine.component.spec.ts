import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasemedicineComponent } from './purchasemedicine.component';

describe('PurchasemedicineComponent', () => {
  let component: PurchasemedicineComponent;
  let fixture: ComponentFixture<PurchasemedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasemedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasemedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
