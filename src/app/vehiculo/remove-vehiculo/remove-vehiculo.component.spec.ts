import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveVehiculoComponent } from './remove-vehiculo.component';

describe('RemoveVehiculoComponent', () => {
  let component: RemoveVehiculoComponent;
  let fixture: ComponentFixture<RemoveVehiculoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveVehiculoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
