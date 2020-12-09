import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftLayerComponent } from './aircraft-layer.component';

describe('AircraftLayerComponent', () => {
  let component: AircraftLayerComponent;
  let fixture: ComponentFixture<AircraftLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftLayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
