import { AddVehiculoComponent } from './../add-vehiculo/add-vehiculo.component';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Vehiculo } from './shared/vehiculo.model';
import { VehiculoService } from './shared/vehiculo.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  providers: [VehiculoService, AddVehiculoComponent],
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit, OnDestroy {
  vehiculos: Vehiculo[] = [];
  intervalHolder: any;

  constructor(
    private vehiculoService: VehiculoService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.onVehicleChange(true);
    this.intervalHolder = setInterval(() => {
      this.onVehicleChange(true);
      this.changeDetectorRef.markForCheck();
    }, 1000 * 20);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalHolder);
  }

  onVehicleChange($event: boolean) {
    if ($event === true) {
      this.vehiculoService
        .getAll<Vehiculo[]>()
        .subscribe(
          (data: Vehiculo[]) => (this.vehiculos = data),
          error => () => {},
          () => {}
        );
    }
  }
}
