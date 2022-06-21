import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  public myAngularxQrCode: string = null;

  constructor() {
    this.myAngularxQrCode = 'https://www.google.com/';
   }

  ngOnInit(): void {
  }

}
