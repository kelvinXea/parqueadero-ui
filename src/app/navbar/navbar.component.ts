import { TrmService } from '../shared/trm/trmService';
import { Component, OnInit } from '@angular/core';
import { Trm } from '../shared/trm/trm.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  trm: string;
  trmModel: Trm;
  constructor(private trmService: TrmService) {}

  ngOnInit() {
    this.trm = 'Cargando . . .';
    this.trmService.get().subscribe(
      (data: Trm) => (this.trmModel = data),
      () => () => {
        this.trm = 'El servicio de TRM no responde';
      },
      () => {
        this.trm = 'TRM actual: ' + this.trmModel.valor;
      }
    );
  }
}
