import { TipoVehiculo } from './TipoVehiculo.enum';

export class Factura {
  placa: string;

  fechaEntrada: Date;

  fechaSalida: Date;

  cc: number;

  pagoTotal: number;

  tipoVehiculo: TipoVehiculo;
}
