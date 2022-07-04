import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { donation } from '../api-models/donation.model';
import { DonationserviceService } from '../donation/donationservice.service';

@Component({
  selector: 'app-cardpayform',
  templateUrl: './cardpayform.component.html',
  styleUrls: ['./cardpayform.component.css']
})
export class CardpayformComponent implements OnInit {

  did: number | undefined | null | string;

  donationtest: donation = {
    did:0,
    name: '',
    email:'',
    phone: '',
    amount: '',
    cardname: ''
  }

  constructor( private readonly donationservice:DonationserviceService,
    private snackbar: MatSnackBar,
    private snack: MatSnackBar,
    private router:Router
  ) { }

  cardpayform: any;

  ngOnInit(): void {
    this.cardpayform = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
      "name1": new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
      "month": new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "phone": new FormControl(null,[Validators.required,Validators.pattern('^[0-9_-]*')]),
      "phone1": new FormControl(null,[Validators.required,Validators.pattern('^[0-9_-]*')]),
      "cvv": new FormControl(null,[Validators.required,Validators.pattern('^[0-9_-]*')]),
      "expyear": new FormControl(null,[Validators.required,Validators.pattern('^[0-9_-]*')]),
      "amount": new FormControl(null,[Validators.required,Validators.pattern('^[0-9_-]*'),Validators.minLength(2)]),
      "date": new FormControl(null,[Validators.required])
    })
  }

  onAdd():void{
    this.donationservice.adddonation(this.donationtest)
  .subscribe(
    (successResponse) => {
      console.log(successResponse);
        // show a notification
      this.snackbar.open('Thanks for helping us so we could help others!', undefined,{
        duration:2000
      });
      setTimeout(() => {
        this.router.navigateByUrl('/showdonations');
      }, 2000);
    }
    ,
    (errorResponse) => {
      console.log(errorResponse);
    }
    );
  }

  //validations
  get name() {return this.cardpayform.get('name');}
  get name1() {return this.cardpayform.get('name1');}
  get month() {return this.cardpayform.get('month');}
  get email() {return this.cardpayform.get('email');}
  get phone() {return this.cardpayform.get('phone');}
  get phone1() {return this.cardpayform.get('phone1');}
  get amount() {return this.cardpayform.get('amount');}
  get date() {return this.cardpayform.get('date');}
  get cvv() {return this.cardpayform.get('cvv');}
  get expyear() {return this.cardpayform.get('expyear');}


}
