import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Configuration {
    private server = 'http://localhost:8080';
    private apiUrl = '/';
    public restUrl = this.server + this.apiUrl;
}
