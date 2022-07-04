import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpagetestComponent } from './frontpagetest.component';

describe('FrontpagetestComponent', () => {
  let component: FrontpagetestComponent;
  let fixture: ComponentFixture<FrontpagetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpagetestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpagetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
