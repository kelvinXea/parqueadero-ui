import { Configuration } from './../../app.constants';
import { VEHICULOS } from './mock-vehiculos';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.restUrl + 'vehiculo/';
  }

  getVehiculos() {
    return Promise.resolve(VEHICULOS);
  }

  public getAll<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
}


}
