import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { radiotests } from '../api-models/radiotests.model';
import { Observable } from 'rxjs';
import { UpdateradiotestRequest } from '../api-models/updateradiotest.model';
import { AddradiotestRequest } from '../api-models/addradiotest.model';

@Injectable({
  providedIn: 'root'
})
export class RadioserviceService {

  private baseApiUrl = 'https://localhost:44355/radiotests/';
  private Url = 'https://localhost:44355/radiotests/Add';

  constructor(private httpClient: HttpClient) { }

  //Show all radiography-tests
  getradiotests():Observable<radiotests[]>{
    return this.httpClient.get<radiotests[]>(this.baseApiUrl);
  }

  //single radiography-tests
  getradiotest(rid):Observable<radiotests>{
    return this.httpClient.get<radiotests>(this.baseApiUrl + rid);
  }

  //update radiography-tests
  updateradiotest(rid, Radiotestrequest: radiotests):Observable<radiotests>{
    const updateradiotestRequest: UpdateradiotestRequest = {
      name:Radiotestrequest.name,
      email: Radiotestrequest.email,
      phone:Radiotestrequest.phone,
      date:Radiotestrequest.date,
      timing:Radiotestrequest.timing,
      test:Radiotestrequest.test
    }
    return this.httpClient.put<radiotests> (this.baseApiUrl + rid, updateradiotestRequest);
  }

  //delete radiography-tests
  deleteradiotest(rid):Observable<radiotests>{
    return this.httpClient.delete<radiotests>(this.baseApiUrl + rid);
  }

  //add radiography-tests
  addradiotest(RadioRequest:radiotests): Observable<radiotests>{
    const AddRadioRequest: AddradiotestRequest = {
      name: RadioRequest.name,
      email: RadioRequest.email,
      phone:RadioRequest.phone,
      date:RadioRequest.date,
      timing:RadioRequest.timing,
      test:RadioRequest.test
    };
    return this.httpClient.post<radiotests> (this.Url, AddRadioRequest);
  }
}



