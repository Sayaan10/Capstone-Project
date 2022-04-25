import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnabledisablemedComponent } from './enabledisablemed.component';

describe('EnabledisablemedComponent', () => {
  let component: EnabledisablemedComponent;
  let fixture: ComponentFixture<EnabledisablemedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnabledisablemedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnabledisablemedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
