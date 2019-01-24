import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TrmService {
  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.restUrl + 'trm/';
  }

  public get<T>(): Observable<T> {
    return this.http.get<T>(this.actionUrl);
  }

}
