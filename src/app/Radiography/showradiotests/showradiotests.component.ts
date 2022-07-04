import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { radiotests } from 'src/app/api-models/radiotests.model';
import { RadioserviceService } from '../radioservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-showradiotests',
  templateUrl: './showradiotests.component.html',
  styleUrls: ['./showradiotests.component.css']
})
export class ShowradiotestsComponent implements OnInit {

  rid: number | undefined | null | string;
  // date!: number| string;

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

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.rid = params.get('rid');

        if (this.rid) {
          this.radioservice.getradiotest(this.rid)
          .subscribe(
            (successResponse) => {
              this.radiotest = successResponse;
            });
        }
      }
    );
  }

  onUpdate(): void{
    //update the form
    this.radioservice.updateradiotest(this.radiotest.rid, this.radiotest)
    .subscribe(
      (successResponse) => {
        console.log(successResponse);
         //show a notification
         this.snackbar.open('Details Updated Successfully!', undefined,{
          duration:2000
        });
        setTimeout(() => {
          this.router.navigateByUrl('/showradiotests');
        }, 2000);
      }
    );
  }

  onDelete(): void{
    //delete the form
    this.radioservice.deleteradiotest(this.radiotest.rid)
    .subscribe(
      (successResponse) => {
        console.log(successResponse);
        //show a notification
        this.snack.open('Details deleted successfully!', undefined,{
          duration:2000
        });
        setTimeout(() => {
          this.router.navigateByUrl('/showradiotests');
        }, 2000);
      }
    );
  }

}
