import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoItemsCartComponent } from './no-items-cart.component';

describe('NoItemsCartComponent', () => {
  let component: NoItemsCartComponent;
  let fixture: ComponentFixture<NoItemsCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoItemsCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoItemsCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
