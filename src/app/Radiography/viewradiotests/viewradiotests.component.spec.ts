import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewradiotestsComponent } from './viewradiotests.component';

describe('ViewradiotestsComponent', () => {
  let component: ViewradiotestsComponent;
  let fixture: ComponentFixture<ViewradiotestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewradiotestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewradiotestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
