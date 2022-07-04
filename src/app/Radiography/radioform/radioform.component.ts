import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { radiotests } from 'src/app/api-models/radiotests.model';
import { RadioserviceService } from '../radioservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-radioform',
  templateUrl: './radioform.component.html',
  styleUrls: ['./radioform.component.css']
})
export class RadioformComponent implements OnInit {

  rid: number | undefined | null | string;

  radiotest: radiotests = {
    rid:0,
    name:'',
    email:'',
    phone:'',
    date:'',
    timing:'',
    test:''
  }

  constructor(private readonly radioservice:RadioserviceService,
    private readonly route:ActivatedRoute,
    private snackbar: MatSnackBar,
    private snack:MatSnackBar,
    private router:Router) { }

    radiodetailsform: any;

  ngOnInit(): void {
    this.radiodetailsform = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "phone": new FormControl(null,[Validators.required,Validators.pattern('^[0-9_-]*')]),
      "date": new FormControl(null,[Validators.required]),
      "timing": new FormControl(null,[Validators.required]),
      "test": new FormControl(null,[Validators.required])
    })
  }

  onAdd(){
    this.radioservice.addradiotest(this.radiotest)
    .subscribe(
      (successResponse) => {
        console.log(successResponse);
        //show a notification
        this.snackbar.open('Your Lab-Tests appointment has booked successfully!', undefined,{
          duration:2000
        });
        setTimeout(() => {
          this.router.navigateByUrl('/showradiotests');
        }, 2000);
      }
  )}

  get name() {return this.radiodetailsform.get('name');}
  get email() {return this.radiodetailsform.get('email');}
  get phone() {return this.radiodetailsform.get('phone');}
  get date() {return this.radiodetailsform.get('date');}
  get timing() {return this.radiodetailsform.get('timing');}
  get test() {return this.radiodetailsform.get('test');}

}
