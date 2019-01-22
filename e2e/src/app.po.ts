import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  esperar(tiempo) {
    return browser.sleep(tiempo);
 }
  console(fun) {
    browser.executeScript(fun);
  }

  // getTitleText() {
  //   return element(by.css('app-root h1')).getText();
  // }

  getAddVehiculoButton() {
    return element(by.css('#mybutton'));
  }

  getModalAddVehiculo() {
    return element(by.tagName('app-add-vehiculo-modal'));
  }

  getModalRemoveVehiculo() {
    return element(by.tagName('app-remove-vehiculo-modal'));
  }

  getModalFactura() {
    return element(by.tagName('app-show-factura'));
  }

  getInputPlacaFromAddVehiculoModal() {
    return this.getModalAddVehiculo().element(by.name('placa'));
  }

  getSelectTipoVehiculoFromAddVehiculoModal() {
    return this.getModalAddVehiculo().element(by.name('tipoVehiculo'));
  }

  getInputCcFromAddVehiculoModal() {
    return this.getModalAddVehiculo().element(by.name('cc'));
  }

  getRegistrarVehiculoButton() {
    return element(by.css('button[type="submit"]'));
  }

  getToast() {
    return element(by.css('[role="alertdialog"]'));
  }

  getH4WithText(text) {
    return element(by.cssContainingText('.card-title', text));
  }

  getButtonRegistrarSalidaPorPlaca(placa) {
   return this.getH4WithText(placa).element(by.xpath('..')).element(by.className('btn-danger'));
  }

  getButtonConfirmarSalidaVehiculo() {
    return this.getModalRemoveVehiculo().element(by.className('btn-danger'));
  }

  getButtonCerrarModalFactura() {
    return this.getModalFactura().element(by.className('btn-secondary'));
  }

  getInputPlacaFromModalFactura() {
    return this.getModalFactura().element(by.name('placa'));
  }

}
