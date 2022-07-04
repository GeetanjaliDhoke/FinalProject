import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowradiotestsComponent } from './showradiotests.component';

describe('ShowradiotestsComponent', () => {
  let component: ShowradiotestsComponent;
  let fixture: ComponentFixture<ShowradiotestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowradiotestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowradiotestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
