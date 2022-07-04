import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlabtestsComponent } from './showlabtests.component';

describe('ShowlabtestsComponent', () => {
  let component: ShowlabtestsComponent;
  let fixture: ComponentFixture<ShowlabtestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowlabtestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlabtestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
