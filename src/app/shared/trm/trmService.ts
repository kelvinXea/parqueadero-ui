import { Trm } from './trm.model';
import { Get } from '../request/request.interface';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Configuration } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TrmService implements Get<Trm> {
  private actionUrl: string;

  constructor(private http: HttpClient, private configuration: Configuration) {
    this.actionUrl = configuration.restUrl + 'trm/';
  }

  public get(): Observable<Trm> {
    return this.http.get<Trm>(this.actionUrl);
  }
}
