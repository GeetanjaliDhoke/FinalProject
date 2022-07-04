import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpayformComponent } from './cardpayform.component';

describe('CardpayformComponent', () => {
  let component: CardpayformComponent;
  let fixture: ComponentFixture<CardpayformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpayformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpayformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
