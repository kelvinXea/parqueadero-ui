import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { AddVehiculoComponent } from './add-vehiculo/add-vehiculo.component';
import { AddVehiculoModalComponent } from './add-vehiculo/add-vehiculo.modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberValidatorDirective } from './NumberValidatorDirective';
import { RemoveVehiculoComponent } from './remove-vehiculo/remove-vehiculo.component';
import { RemoveVehiculoModalComponent } from './remove-vehiculo/remove-vehiculo.modal.component';
import { ShowFacturaModalComponent } from './show-factura/show-factura.modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
