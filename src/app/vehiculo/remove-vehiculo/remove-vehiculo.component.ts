import { VehiculoService } from '../shared/vehiculo.service';
import { RemoveVehiculoModalComponent } from './remove-vehiculo.modal.component';
import { Vehiculo } from '../shared/vehiculo.model';
import { Component, OnInit, Input } from '@angular/core';
import { TipoVehiculo } from '../shared/TipoVehiculo.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Factura } from '../shared/factura.model';
import { ShowFacturaModalComponent } from 'src/app/factura/show-factura/show-factura.modal.component';

@Component({
  selector: 'app-remove-vehiculo',
  templateUrl: './remove-vehiculo.component.html',
  styleUrls: ['./remove-vehiculo.component.css']
})
export class RemoveVehiculoComponent implements OnInit {
  @Input() vehiculo: Vehiculo;
  tipoVehiculo = TipoVehiculo;

  constructor(
    private modalService: NgbModal,
    private vehiculoService: VehiculoService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  openModalRemoveVehiculo() {
    const modalRef = this.modalService.open(RemoveVehiculoModalComponent);
    modalRef.componentInstance.vehiculo = this.vehiculo;

    modalRef.result
      .then(result => {
        this.vehiculoService.update(result).subscribe(
          (data: Factura) => {
            this.toastr.success(
              'Se a registrado la salida del vehículo correctamente'
            );
            this.modalService.open(
              ShowFacturaModalComponent
            ).componentInstance.factura = data;
          },
          err => {
            if (err.status === 400) {
              this.toastr.warning(err.error);
            } else {
              this.toastr.error(err.error);
            }
          }
        );
      })
      .catch(error => {});
  }
}
