// HATIM CODE
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;

  logosvg :string="assets/images/Calisya.svg";

  constructor() { }

  ngOnInit(): void {
  }

  }




