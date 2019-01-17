import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFacturaModalComponent } from './show-factura.modal.component';

describe('ShowFactura.ModalComponent', () => {
  let component: ShowFacturaModalComponent;
  let fixture: ComponentFixture<ShowFacturaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowFacturaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFacturaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
