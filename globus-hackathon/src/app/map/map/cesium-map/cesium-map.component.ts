import { Component, OnInit } from '@angular/core';
import {
  MapLayerProviderOptions,
  SceneMode,
  ViewerConfiguration,
} from 'angular-cesium';
import { AppSettingsService } from '../../../services/app-settings.service';

@Component({
  selector: 'app-cesium-map',
  templateUrl: './cesium-map.component.html',
  styleUrls: ['./cesium-map.component.sass'],
  providers: [ViewerConfiguration, AppSettingsService],
})
export class CesiumMapComponent implements OnInit {
  mapProvider = MapLayerProviderOptions.ArcGisMapServer;
  sceneMode = SceneMode.SCENE3D;
  Cesium = Cesium;

  constructor(
    private viewerConf: ViewerConfiguration,
    public appSettingsService: AppSettingsService
  ) {
    viewerConf.viewerOptions = {
      selectionIndicator: false,
      timeline: false,
      infoBox: false,
      fullscreenButton: false,
      baseLayerPicker: false,
      animation: false,
      shouldAnimate: false,
      homeButton: false,
      geocoder: true,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      mapMode2D: Cesium.MapMode2D.ROTATE,
    };

    viewerConf.viewerModifier = (viewer: any) => {
      viewer.screenSpaceEventHandler.removeInputAction(
        Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
    };
  }

  ngOnInit(): void {}
}
