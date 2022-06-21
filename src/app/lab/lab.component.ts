import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentComponent } from '../payment/payment.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(PaymentComponent);
  }

  labform:any;

  ngOnInit(): void {

    this.labform = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "number": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "date": new FormControl(null,Validators.required)
    }); 

  }

  save(){
    console.log(this.labform.value);
  }

  get name(){return this.labform.get('name');}
  get email(){return this.labform.get('email');}
  get number(){return this.labform.get('number');}



}
