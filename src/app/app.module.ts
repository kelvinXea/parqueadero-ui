import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehiculosComponent } from './Vehiculo/vehiculos/vehiculos.component';
import { AddVehiculoComponent } from './Vehiculo/add-vehiculo/add-vehiculo.component';
import { AddVehiculoModalComponent } from './Vehiculo/add-vehiculo/add-vehiculo.modal.component';
import { NumberValidatorDirective } from './core/NumberValidatorDirective';
import { RemoveVehiculoComponent } from './Vehiculo/remove-vehiculo/remove-vehiculo.component';
import { RemoveVehiculoModalComponent } from './Vehiculo/remove-vehiculo/remove-vehiculo.modal.component';
import { ShowFacturaModalComponent } from './factura/show-factura/show-factura.modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import {
  InjectableRxStompConfig,
  rxStompServiceFactory,
  RxStompService
} from '@stomp/ng2-stompjs';
import { StompConfig } from './StompConfig';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    AddVehiculoComponent,
    AddVehiculoModalComponent,
    NumberValidatorDirective,
    RemoveVehiculoComponent,
    RemoveVehiculoModalComponent,
    ShowFacturaModalComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  entryComponents: [
    AddVehiculoModalComponent,
    RemoveVehiculoModalComponent,
    ShowFacturaModalComponent
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: StompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
