import { Vehiculo } from './vehiculo.model';
import { TipoVehiculo } from './TipoVehiculo.enum';

export const VEHICULOS: Vehiculo[] = [
  {
    placa: 'AKHJYTW',
    tipoVehiculo: TipoVehiculo.CARRO,
    fechaEntrada: new Date(),
    cc: 0
  },
  {
    placa: 'PRROWAF',
    tipoVehiculo: TipoVehiculo.MOTO,
    fechaEntrada: new Date(),
    cc: 400
  },
  {
    placa: 'KLDWEQS',
    tipoVehiculo: TipoVehiculo.CARRO,
    fechaEntrada: new Date(),
    cc: 0
  },
  {
    placa: 'UIOWPSD',
    tipoVehiculo: TipoVehiculo.MOTO,
    fechaEntrada: new Date(),
    cc: 700
  },
  {
    placa: 'UIO11SD',
    tipoVehiculo: TipoVehiculo.MOTO,
    fechaEntrada: new Date(),
    cc: 700
  },
  {
    placa: '2IOWPSD',
    tipoVehiculo: TipoVehiculo.MOTO,
    fechaEntrada: new Date(),
    cc: 700
  }
];
