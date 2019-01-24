import { element } from 'protractor';
import { AppPage } from './app.po';

const PLACA = 'EUWEWE';

describe('Añadir un vehiculo', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deberia mostrar la pagina principal', () => {
    page.navigateTo();
  });

  it('deberia abrir el modal para añadir vehiculo', () => {
    page.getAddVehiculoButton().click();
    expect(page.getModalAddVehiculo()).toBeTruthy();
  });

  it('deberia rellenar la informacion y enviarla', () => {
    page.getInputPlacaFromAddVehiculoModal().sendKeys(PLACA);
    const cc = page.getInputCcFromAddVehiculoModal();
    cc.clear().then(() => {cc.sendKeys('500'); });
    page.getRegistrarVehiculoButton().click();
    expect(page.getToast()).toBeTruthy();
  });


});


describe('Ver vehiculo', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deberia mostrar la pagina principal y buscar la carta con el vehiculo', () => {
    page.navigateTo();
    const placa = page.getH4WithText(PLACA).getText();
    expect(placa).toBe(PLACA);
  });

});


describe('Salida vehiculo', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deberia mostrar el modal de confirmacion para el retiro de vehiculo', () => {
    page.navigateTo();
    page.getButtonRegistrarSalidaPorPlaca(PLACA).click();
    expect(page.getModalRemoveVehiculo()).toBeTruthy();
  });

  it('deberia dar click al boton para remover el vehiculo y mostrar el modal de factura', () => {
    page.getButtonConfirmarSalidaVehiculo().click();
    expect(page.getModalFactura()).toBeTruthy();
  });

  it('deberia verificar que sea la misma placa en el modal', () => {
    expect(page.getInputPlacaFromModalFactura().getAttribute('value')).toBe(PLACA);
    page.getButtonCerrarModalFactura().click();

  });

});

