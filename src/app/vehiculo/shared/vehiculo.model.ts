import { TipoVehiculo } from './TipoVehiculo.enum';

export class Vehiculo {
  placa: string = null;
  tipoVehiculo: TipoVehiculo = null;
  cc = 0;
  fechaEntrada: Date = null;
}
