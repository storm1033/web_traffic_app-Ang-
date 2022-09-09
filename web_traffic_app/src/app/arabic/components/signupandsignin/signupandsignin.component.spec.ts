import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupandsigninComponent } from './signupandsignin.component';

describe('SignupandsigninComponent', () => {
  let component: SignupandsigninComponent;
  let fixture: ComponentFixture<SignupandsigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupandsigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupandsigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
