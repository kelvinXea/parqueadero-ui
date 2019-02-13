import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Configuration {
  private server = 'http://192.168.18.233:8080';
  private apiUrl = '/';
  public restUrl = this.server + this.apiUrl;
}
