import { ShowFacturaModalComponent } from './../show-factura/show-factura.modal.component';
import { Factura } from './../vehiculos/shared/factura.model';
import { VehiculoService } from './../vehiculos/shared/vehiculo.service';
import { RemoveVehiculoModalComponent } from './remove-vehiculo.modal.component';
import { Vehiculo } from './../vehiculos/shared/vehiculo.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TipoVehiculo } from '../vehiculos/shared/TipoVehiculo.enum';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-remove-vehiculo',
  templateUrl: './remove-vehiculo.component.html',
  providers: [VehiculoService],
  styleUrls: ['./remove-vehiculo.component.css']
})
export class RemoveVehiculoComponent implements OnInit {
  @Input() vehiculo: Vehiculo;
  @Output() vehiculoRemoved = new EventEmitter();
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
            this.vehiculoRemoved.emit(true);
            this.toastr.success(
              'Se a registrado la salida del vehículo correctamente'
            );
            this.modalService.open(
              ShowFacturaModalComponent
            ).componentInstance.factura = data;
          },
          err => {
            console.log(err);
            switch (err.status) {
              case 400:
                this.toastr.warning(err.error);

                break;

              default:
                this.toastr.error(err.error);
            }
          }
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
}
