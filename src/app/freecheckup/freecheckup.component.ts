import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-freecheckup',
  templateUrl: './freecheckup.component.html',
  styleUrls: ['./freecheckup.component.css']
})
export class FreecheckupComponent implements OnInit {

  constructor() { }

  checkupform:any;

  ngOnInit(): void {

    this.checkupform = new FormGroup({
      "name": new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email": new FormControl(null,[Validators.required,Validators.email]),
      "number": new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')]),
      "date": new FormControl(null,Validators.required)
    }); 

  }

  get name(){return this.checkupform.get('name');}
  get email(){return this.checkupform.get('email');}
  get number(){return this.checkupform.get('number');}

  print(){
    window.print();
  }

}
