import { Vehiculo } from '../shared/vehiculo.model';
import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoVehiculo } from '../shared/TipoVehiculo.enum';

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
    this.vehiculo.cc = 49;
  }

  getTipoVehiculoValues() {
    return Object.keys(TipoVehiculo).filter(
      type => isNaN(<any>type) && type !== 'values'
    );
  }

  submitForm(form: { valid: any; value: { cc: number; placa: string } }) {
    if (
      form.valid &&
      (!form.value.cc || (form.value.cc >= 49 && form.value.cc <= 1500))
    ) {
      this.activeModal.close(this.vehiculo);
    }
  }
}
