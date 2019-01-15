import { TipoVehiculo } from './shared/TipoVehiculo.enum';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Vehiculo } from './shared/vehiculo.model';
import { VehiculoService } from './shared/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  providers: [VehiculoService],
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  tipoVehiculo = TipoVehiculo;
  vehiculos: Vehiculo[] = [];
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.vehiculoService.getAll<Vehiculo[]>().subscribe(
      (data: Vehiculo[]) => (this.vehiculos = data),
      error => () => {
        console.log('error');
      },
      () => {
        console.log('completo');
      }
    );

    //  this.vehiculoService.getVehiculos().then(
    //    vehiculos => this.vehiculos = vehiculos
    //  );
  }
}
