import { Vehiculo } from './../vehiculos/shared/vehiculo.model';
import {Component, OnInit, ViewChild, Input} from '@angular/core';

import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { TipoVehiculo } from '../vehiculos/shared/TipoVehiculo.enum';

@Component({
  selector: 'app-add-vehiculo-modal',
  templateUrl: './add-vehiculo.modal.component.html'
})
export class AddVehiculoModalComponent {

  vehiculo: Vehiculo;
  tipoVehiculos = TipoVehiculo;
  keys = Object.keys;

  constructor(public activeModal: NgbActiveModal) {
    this.vehiculo = new Vehiculo();
    this.vehiculo.tipoVehiculo = TipoVehiculo.MOTO;
  }

  getTipoVehiculoValues() {
    return Object.keys(TipoVehiculo).filter(
      (type) => isNaN(<any>type) && type !== 'values'
    );
  }

  submitForm(form) {
    if (form.valid) {
      this.activeModal.close(this.vehiculo);
    }
  }

}
