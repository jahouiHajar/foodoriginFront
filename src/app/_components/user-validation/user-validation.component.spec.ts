import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserValidationComponent } from './user-validation.component';

describe('UserValidationComponent', () => {
  let component: UserValidationComponent;
  let fixture: ComponentFixture<UserValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  class MockUserService {
    isLoggedIn = true;
    user = { name: 'Test User'};
  }
  it('#clicked() should toggle #isOn', () => {
  });
});
