import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CardpayComponent } from '../cardpay/cardpay.component';
import { ScanpayComponent } from '../scanpay/scanpay.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(ScanpayComponent);
  }

  openDialogg(){
    this.dialog.open(CardpayComponent);
  }


  ngOnInit(): void {
  }

}
