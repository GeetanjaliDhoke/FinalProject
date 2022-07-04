import { Component, OnInit, ViewChild } from '@angular/core';
import { donation } from 'src/app/api-models/donation.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DonationserviceService } from '../donationservice.service';

@Component({
  selector: 'app-showdonations',
  templateUrl: './showdonations.component.html',
  styleUrls: ['./showdonations.component.css']
})
export class ShowdonationsComponent implements OnInit {

  showdonation:donation[] = [];
  displayedColumns: string[] = ['Name', 'Amount'];
  dataSource: MatTableDataSource<donation> = new MatTableDataSource<donation>();
  @ViewChild(MatPaginator) matPaginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  filterString = '';

  constructor(private donationservice:DonationserviceService) { }

  ngOnInit(): void {
    this.donationservice.getdonations().subscribe(
      (successResponse) => {
        this.showdonation = successResponse;
        this.dataSource = new MatTableDataSource<donation>(this.showdonation);

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
  }




