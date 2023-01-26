import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileUpdatePersonalComponent } from './my-profile-update-personal.component';

describe('MyProfileUpdatePersonalComponent', () => {
  let component: MyProfileUpdatePersonalComponent;
  let fixture: ComponentFixture<MyProfileUpdatePersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileUpdatePersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProfileUpdatePersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
