import { Action } from './../../shared/messageAction.enum';
import { RxStompService } from '@stomp/ng2-stompjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from './vehiculo.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { VEHICULOS } from './mock-vehiculos';
import { Configuration } from 'src/app/app.constants';
import { Message } from '@stomp/stompjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  vehiculos: Observable<Vehiculo[]>;
  private _vehiculos: BehaviorSubject<Vehiculo[]>;
  private dataStore: {
    vehiculos: Vehiculo[];
  };
  private actionUrl: string;
  private vehiculo: Vehiculo;
  private reactiveActionUrl: string;
  private action: Action;

  constructor(
    private http: HttpClient,
    private configuration: Configuration,
    private rxStompService: RxStompService
  ) {
    this.actionUrl = configuration.restUrl + 'vehiculo/';
    this.reactiveActionUrl = configuration.restUrl + 'rx/vehiculo/';
    this._vehiculos = <BehaviorSubject<Vehiculo[]>>new BehaviorSubject([]);
    this.vehiculos = this._vehiculos.asObservable();
    this.dataStore = { vehiculos: [] };
    this.subscribe();
  }

  subscribe() {
    this.rxStompService
      .watch('/vehiculo/change')
      .subscribe((message: Message) => {
        this.action = Action[<string>JSON.parse(message.body).action];
        this.vehiculo = JSON.parse(message.body).object;
        this.executeAction();
      });
  }

  private executeAction() {
    if (this.action === Action.ADD) {
      this.create();
    } else if (this.action === Action.DELETE) {
      this.remove();
    }
  }

  private create() {
    this.dataStore.vehiculos.push(this.vehiculo);
    this._vehiculos.next(Object.assign({}, this.dataStore).vehiculos);
  }

  private remove() {
    this.dataStore.vehiculos.forEach((v, i) => {
      if (v.placa === this.vehiculo.placa) {
        this.dataStore.vehiculos.splice(i, 1);
      }
    });
    this._vehiculos.next(Object.assign({}, this.dataStore).vehiculos);
  }

  public getAllMock(): Promise<Vehiculo[]> {
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

  loadAll() {
    this.getAll<Vehiculo[]>().subscribe((data: Vehiculo[]) => {
      this.dataStore.vehiculos = data;
      this._vehiculos.next(Object.assign({}, this.dataStore).vehiculos);
    });
  }
}
