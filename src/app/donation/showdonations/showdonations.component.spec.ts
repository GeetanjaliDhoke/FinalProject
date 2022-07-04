import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdonationsComponent } from './showdonations.component';

describe('ShowdonationsComponent', () => {
  let component: ShowdonationsComponent;
  let fixture: ComponentFixture<ShowdonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
