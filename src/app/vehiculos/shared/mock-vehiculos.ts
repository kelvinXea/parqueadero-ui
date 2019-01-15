import { Vehiculo } from './vehiculo.model';
import { TipoVehiculo } from './TipoVehiculo.enum';


export const VEHICULOS: Vehiculo[] = [

  {placa : 'AKHJYTW', tipoVehiculo : TipoVehiculo.Carro, fechaEntrada: new Date(), cc: 0},
  {placa : 'PRROWAF', tipoVehiculo : TipoVehiculo.Moto, fechaEntrada: new Date(), cc: 400},
  {placa : 'KLDWEQS', tipoVehiculo : TipoVehiculo.Carro, fechaEntrada: new Date(), cc: 0},
  {placa : 'UIOWPSD', tipoVehiculo : TipoVehiculo.Moto, fechaEntrada: new Date(), cc: 700},
  {placa : 'UIO11SD', tipoVehiculo : TipoVehiculo.Moto, fechaEntrada: new Date(), cc: 700},
  {placa : '2IOWPSD', tipoVehiculo : TipoVehiculo.Moto, fechaEntrada: new Date(), cc: 700}

];
