import { AddVehiculoComponent } from './../add-vehiculo/add-vehiculo.component';
import { Component, OnInit, SystemJsNgModuleLoader, EventEmitter } from '@angular/core';
import { Vehiculo } from './shared/vehiculo.model';
import { VehiculoService } from './shared/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  providers: [VehiculoService, AddVehiculoComponent],
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.onVehicleChange(true);
  }

  onVehicleChange($event: boolean) {
    if ($event === true) {
      this.vehiculoService.getAll<Vehiculo[]>().subscribe(
        (data: Vehiculo[]) => (this.vehiculos = data),
        error => () => {
          console.log(error);
        },
        () => {
          console.log(this.vehiculos);
          console.log('completo');
        }
      );
    }
  }
}
