import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanpay',
  templateUrl: './scanpay.component.html',
  styleUrls: ['./scanpay.component.css']
})
export class ScanpayComponent implements OnInit {
  public myAngularxQrCode: string = null;

  constructor() {
    this.myAngularxQrCode = 'https://www.google.com/';
   }

  ngOnInit(): void {
  }

}
