// NO SE ESTA USANDO ESTO ERA SOLO PROBANDO DECORATORS Y REFLECT
import 'reflect-metadata';
import { HttpClient, HttpXhrBackend } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Vehiculo } from 'src/app/Vehiculo/shared/vehiculo.model';

const httpHandlerInjector = Injector.create([
  { provide: HttpXhrBackend, useClass: HttpXhrBackend, deps: [] }
]);

const httpClientInjector = Injector.create(
  [{ provide: HttpClient, useClass: HttpClient, deps: [HttpXhrBackend] }],
  httpHandlerInjector
);

export function getRequest(properties: any) {
  const httpService = httpClientInjector.get(HttpClient);
  return (target, key) => {
    makePropertyMapper(target, key, (value: any) => {
      return httpService.get<Vehiculo[]>('http://localhost:8080/vehiculo/');
    });
  };
}

function makePropertyMapper<T>(
  prototype: any,
  key: string,
  mapper: (value: any) => T
) {
  const values = new Map<any, T>();
  Reflect.defineProperty(prototype, key, {
    set(firstValue: any) {
      Reflect.defineProperty(this, key, {
        get() {
          return values.get(this);
        },
        set(value: any) {
          values.set(this, mapper(value));
        },
        enumerable: true
      });
      this[key] = firstValue;
    },
    enumerable: true,
    configurable: true
  });
}
