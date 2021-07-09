import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Registration } from './registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = environment.baseUrl;
  private resourceUrl = this.baseUrl + "ticketRegisteration/save";
  constructor(private http: HttpClient) { }

  public createRegistration(registrationModel: any) {
    return this.http.post<Registration>(this.resourceUrl, registrationModel);
  }

  public searchByReferenceNumber(referenceNumber: string) {
    return this.http.get<any>(this.baseUrl + "ticketRegisteration/findByReferenceNumber/" + referenceNumber);
  }

  public getReferenceNumber() {
    return this.http.get<any>(this.baseUrl + "ticketRegisteration/generateReferenceNumber");
  }
}
