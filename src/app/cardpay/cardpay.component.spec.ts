import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardpayComponent } from './cardpay.component';

describe('CardpayComponent', () => {
  let component: CardpayComponent;
  let fixture: ComponentFixture<CardpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
