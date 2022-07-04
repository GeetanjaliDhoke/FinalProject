import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { LabserviceService } from '../labservice.service';
import { NgForm } from '@angular/forms';
import { labtests } from '../api-models/labtests.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-viewlabtest',
  templateUrl: './viewlabtest.component.html',
  styleUrls: ['./viewlabtest.component.css']
})
export class ViewlabtestComponent implements OnInit {

  labid: number | undefined | null | string;
  date!: number| string;

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
    private snack:MatSnackBar,
    private readonly route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
       this.labid = params.get('labid');

       if(this.labid) {
        this.labservice.getlabtest(this.labid).subscribe(
          (successResponse) => {
            this.labtest = successResponse;
          });
       }
      }
    );

  }

  onUpdate(): void{
//call lab service to update details
    this.labservice.updatelabtest(this.labtest.labid,this.labtest)
    .subscribe(
      (successResponse) =>
      {
        console.log(successResponse);
        //show a notification
        this.snackbar.open('Details Updated Successfully!', undefined,{
          duration:2000
        });
        setTimeout(() => {
          this.router.navigateByUrl('/Labtests');
        }, 2000);
      }
      // ,
      // (errorResponse)=>{
      //   //log it
      //   console.log(errorResponse);
      // }
    );
  }

  onDelete(): void{
    this.labservice.deletelabtest(this.labtest.labid)
    .subscribe(
      (successResponse)=>{
        console.log(successResponse);
        //show a notification
        this.snack.open('Details deleted successfully!', undefined, {
          duration: 1500
        });

        setTimeout(() => {
          this.router.navigateByUrl('/Labtests');
        }, 2000);
      }
      // ,
      // (errorResponse) =>{
      //   //log it
      // }
    )
  }

}
