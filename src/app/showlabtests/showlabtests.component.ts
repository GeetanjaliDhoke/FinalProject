import { Component, OnInit, ViewChild } from '@angular/core';
import { LabserviceService } from '../labservice.service';
import { labtests } from '../api-models/labtests.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-showlabtests',
  templateUrl: './showlabtests.component.html',
  styleUrls: ['./showlabtests.component.css']
})
export class ShowlabtestsComponent implements OnInit {

  labtest:labtests[] = [];
  displayedColumns: string[] = ['Name', 'Email','Number' ,'Date','Timing', 'Test','edit'];
  dataSource: MatTableDataSource<labtests> = new MatTableDataSource<labtests>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';


  constructor(private labservice:LabserviceService) { }

  ngOnInit(): void {
    //fetch labtests
    this.labservice.getlabtests().subscribe(
      (successResponse) => {
        this.labtest = successResponse;
        this.dataSource = new MatTableDataSource<labtests>(this.labtest);

        //paginator tab
        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        //matSort tab
        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }

      },
      (errorResponse) => {
        console.log(errorResponse);
      }
    );
  }

  //filter tab
  filterlabs() {
    this.dataSource.filter = this.filterString.trim().toLowerCase();
  }

}
