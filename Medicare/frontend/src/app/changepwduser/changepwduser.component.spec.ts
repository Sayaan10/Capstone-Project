import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepwduserComponent } from './changepwduser.component';

describe('ChangepwduserComponent', () => {
  let component: ChangepwduserComponent;
  let fixture: ComponentFixture<ChangepwduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepwduserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
