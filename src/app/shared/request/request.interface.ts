import { Observable } from 'rxjs';

export interface Get<T> {
  get(val: any): Observable<T>;
}

export interface Post<T> {
  post(obj: T): Observable<T>;
}

export interface Put<T> {
  put(obj: T): Observable<T>;
}

export interface Delete<T> {
  delete(obj: T): Observable<T>;
}
