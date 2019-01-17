import { Configuration } from './../../app.constants';
import { VEHICULOS } from './mock-vehiculos';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehiculo } from './vehiculo.model';

@Injectable({
  providedIn: 'root'
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

  public add<T>(itemName: Vehiculo): Observable<T> {
    const toAdd = itemName;

    return this.http.post<T>(this.actionUrl, toAdd);
  }

  public update<T>(itemToUpdate: Vehiculo): Observable<T> {
    return this.http.put<T>(this.actionUrl, itemToUpdate);
  }
}
