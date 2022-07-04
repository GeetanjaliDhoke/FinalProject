import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardpayformComponent } from '../cardpayform/cardpayform.component';
import { ScannerComponent } from '../scanner/scanner.component';


@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {


  constructor(private dialog:MatDialog) { }

  openDialog() {
    this.dialog.open(ScannerComponent);
  }


  ngOnInit(): void {

  }


  }


