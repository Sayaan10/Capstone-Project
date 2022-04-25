import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepwdadminComponent } from './changepwdadmin.component';

describe('ChangepwdadminComponent', () => {
  let component: ChangepwdadminComponent;
  let fixture: ComponentFixture<ChangepwdadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepwdadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepwdadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
