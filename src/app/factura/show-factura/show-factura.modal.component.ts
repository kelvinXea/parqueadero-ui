import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Factura } from 'src/app/Vehiculo/shared/factura.model';
import { TipoVehiculo } from 'src/app/Vehiculo/shared/TipoVehiculo.enum';

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
