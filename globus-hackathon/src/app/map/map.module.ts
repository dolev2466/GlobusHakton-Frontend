import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularCesiumModule,
  AngularCesiumWidgetsModule,
} from 'angular-cesium';
import { CesiumMapComponent } from './cesium-map/cesium-map.component';
import { AircraftLayerComponent } from './aircraft-layer/aircraft-layer.component';

@NgModule({
  declarations: [CesiumMapComponent, AircraftLayerComponent],
  imports: [
    CommonModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
  ],
  exports: [CesiumMapComponent],
})
export class MapModule {}
