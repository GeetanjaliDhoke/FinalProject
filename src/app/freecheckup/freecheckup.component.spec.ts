import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreecheckupComponent } from './freecheckup.component';

describe('FreecheckupComponent', () => {
  let component: FreecheckupComponent;
  let fixture: ComponentFixture<FreecheckupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreecheckupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreecheckupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
