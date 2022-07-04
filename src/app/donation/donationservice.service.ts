import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adddonationRequest } from '../api-models/adddonation.model';
import { donation } from '../api-models/donation.model';

@Injectable({
  providedIn: 'root'
})
export class DonationserviceService {

  private baseApiUrl='https://localhost:44355/donation/';
  private baseUrl = 'https://localhost:44355/donation/Add';

  constructor(private httpClient: HttpClient) { }

   //Show all lab-tests
   getdonations():Observable<donation[]> {
    return this.httpClient.get<donation[]>(this.baseApiUrl);
  }

  //add donations
  adddonation(adddonationRequest:donation): Observable<donation>{
    const AddDonationRequest: adddonationRequest = {
      name: adddonationRequest.name,
      email: adddonationRequest.email,
      phone:adddonationRequest.phone,
      amount:adddonationRequest.amount,
      cardname:adddonationRequest.cardname,
    };
    return this.httpClient.post<donation> (this.baseUrl, AddDonationRequest);
  }

}
