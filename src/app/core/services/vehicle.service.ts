import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicles } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  listVehicles(): Observable<Vehicles[]>{
    return this.http.get<Vehicles[]>(
      `${environment.api_url}/vehicles`
    )
  }
}
