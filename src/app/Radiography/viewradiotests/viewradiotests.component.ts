import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild} from '@angular/core';
import { radiotests } from 'src/app/api-models/radiotests.model';
import { RadioserviceService } from '../radioservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-viewradiotests',
  templateUrl: './viewradiotests.component.html',
  styleUrls: ['./viewradiotests.component.css']
})

export class ViewradiotestsComponent implements OnInit {

radiotest:radiotests[]=[];
displayedColumns: string[] = ['Name', 'Email','Number' ,'Date','Timing', 'Test','edit'];
dataSource: MatTableDataSource<radiotests> = new MatTableDataSource<radiotests>();
@ViewChild(MatPaginator) matPaginator!: MatPaginator;
@ViewChild(MatSort) matSort!: MatSort;
filterString = '';


  constructor(private radioservice:RadioserviceService) { }

  ngOnInit(): void {
    //fetch tests
    this.radioservice.getradiotests()
    .subscribe(
      (successResponse) => {
        this.radiotest = successResponse;
        this.dataSource = new MatTableDataSource<radiotests>(this.radiotest);

        //paginator tab
        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        //matSort tab
        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      }
    );

  }

  //filter tab
  filterlabs() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }

}

