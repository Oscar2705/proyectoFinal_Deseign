import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoHistoryYetComponent } from './no-history-yet.component';

describe('NoHistoryYetComponent', () => {
  let component: NoHistoryYetComponent;
  let fixture: ComponentFixture<NoHistoryYetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoHistoryYetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoHistoryYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
