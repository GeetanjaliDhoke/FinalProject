import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { labtests } from '../api-models/labtests.model';
import { LabserviceService } from '../labservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  labid: number | undefined | null | string;
  // date!: number| string;

  labtest: labtests = {
    labid:0,
    name: '',
    email: '',
    phone: '',
    date: '',
    timing:'',
    test: ''
  };


  constructor(private labservice:LabserviceService,
    private snackbar: MatSnackBar,
    private router:Router) { }

    labdetailsform: any;

  ngOnInit(): void {
    this.labdetailsform = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z_-]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "phone": new FormControl(null,[Validators.required,Validators.pattern('^[0-9_-]*')]),
      "date": new FormControl(null,[Validators.required]),
      "timing": new FormControl(null,[Validators.required]),
      "test": new FormControl(null,[Validators.required])
    })
  }

  onAdd():void{
      this.labservice.addlabtest(this.labtest)
    .subscribe(
      (successResponse) => {
        console.log(successResponse);
        //show a notification
        this.snackbar.open('Your Lab-Tests appointment has booked successfully!', undefined,{
          duration:2000
        });
        setTimeout(() => {
          this.router.navigateByUrl('/Labtests');
        }, 2000);
      }
      // ,
      // (errorResponse) => {
      //   console.log(errorResponse);
      // }
      );
    }

  get name() {return this.labdetailsform.get('name');}
  get email() {return this.labdetailsform.get('email');}
  get phone() {return this.labdetailsform.get('phone');}
  get date() {return this.labdetailsform.get('date');}
  get timing() {return this.labdetailsform.get('timing');}
  get test() {return this.labdetailsform.get('test');}
}
