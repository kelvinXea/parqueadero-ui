import { AddVehiculoComponent } from '../add-vehiculo/add-vehiculo.component';
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../shared/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  providers: [AddVehiculoComponent],
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  vehiculos: any;
  intervalHolder: any;
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.vehiculos = this.vehiculoService.vehiculos;
    this.vehiculoService.loadAll();
  }
}
