import { Component, Input, OnInit } from '@angular/core';
import { Factura } from '../vehiculos/shared/factura.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoVehiculo } from '../vehiculos/shared/TipoVehiculo.enum';

@Component({
  selector: 'app-show-factura',
  templateUrl: './show-factura.modal.component.html'
})
export class ShowFacturaModalComponent implements OnInit {
  @Input() factura: Factura;
  tipoVehiculo = TipoVehiculo;

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
  }
}
