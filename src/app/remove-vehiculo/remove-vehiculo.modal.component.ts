import { TipoVehiculo } from './../vehiculos/shared/TipoVehiculo.enum';
import { Vehiculo } from './../vehiculos/shared/vehiculo.model';
import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remove-vehiculo-modal',
  templateUrl: './remove-vehiculo.modal.component.html'
})
export class RemoveVehiculoModalComponent {

  @Input() vehiculo: Vehiculo;

  constructor(public activeModal: NgbActiveModal) {
  }

  removeVehiculo() {
      this.activeModal.close(this.vehiculo);
  }

}
