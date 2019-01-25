import { AddVehiculoModalComponent } from './add-vehiculo.modal.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehiculoService } from '../vehiculos/shared/vehiculo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-vehiculo',
  templateUrl: './add-vehiculo.component.html',
  providers: [VehiculoService],
  styleUrls: ['./add-vehiculo.component.css']
})
export class AddVehiculoComponent implements OnInit {
  @Output() vehiculoAdded = new EventEmitter();

  constructor(
    private modalService: NgbModal,
    private vehiculoService: VehiculoService,
    private toastr: ToastrService
  ) {}

  open() {
    this.modalService
      .open(AddVehiculoModalComponent)
      .result.then(result => {
        this.vehiculoService.add(result).subscribe(
          (data: string) => {
            this.toastr.success(data);
            this.vehiculoAdded.emit(true);
          },
          err => {
            switch (err.status) {
              case 400:
                this.toastr.warning(err.error);
                break;

              case 0:
                this.toastr.error(
                  'El servidor no se encuentra disponible intente mas tarde'
                );

                break;

              default:
                this.toastr.error(err.error);
            }
          }
        );
      })
      .catch(error => {});
  }

  ngOnInit() {}
}
