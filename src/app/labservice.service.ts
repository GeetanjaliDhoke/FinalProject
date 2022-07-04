import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { String } from 'cypress/types/lodash';
import { Observable } from 'rxjs';
import { labtests } from './api-models/labtests.model';
import { UpdateLabRequest } from './api-models/updatelabtest.model';
import { AddLabRequest } from './api-models/addlabtest.model';

@Injectable({
  providedIn: 'root'
})

export class LabserviceService {

  private baseApiUrl = 'https://localhost:44355/labtests/';
  private Url = 'https://localhost:44355/labtests/Add';

  constructor(private httpClient: HttpClient) { }

  //Show all lab-tests
  getlabtests():Observable<labtests[]> {
    return this.httpClient.get<labtests[]>(this.baseApiUrl);
  }

  //single lab-tests
  getlabtest(labid):Observable<labtests> {
    return this.httpClient.get<labtests>(this.baseApiUrl + labid);
  }

  //update lab-tests
  updatelabtest(labid, LabRequest:labtests) : Observable<labtests> {
    const updateLabRequest:UpdateLabRequest ={
      name: LabRequest.name,
      email: LabRequest.email,
      phone:LabRequest.phone,
      date:LabRequest.date,
      timing:LabRequest.timing,
      test:LabRequest.test
    }
    return this.httpClient.put<labtests>(this.baseApiUrl + labid, updateLabRequest);
  }

  //delete lab-tests
  deletelabtest(labid):Observable<labtests> {
    return this.httpClient.delete<labtests>(this.baseApiUrl + labid);
  }

  //add lab-tests
  addlabtest(LabRequest:labtests): Observable<labtests>{
    const AddLabRequest:AddLabRequest ={
      name: LabRequest.name,
      email: LabRequest.email,
      phone:LabRequest.phone,
      date:LabRequest.date,
      timing:LabRequest.timing,
      test:LabRequest.test
    };
    return this.httpClient.post<labtests>(this.Url, AddLabRequest);
  }
}
