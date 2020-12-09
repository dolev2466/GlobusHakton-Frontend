import { Injectable } from '@angular/core';

interface AppSettings {
  showMapLayer: boolean;
}

@Injectable()
export class AppSettingsService {
  private settings: AppSettings = {
    showMapLayer: false,
  };

  get showMapLayer(): boolean {
    return this.settings.showMapLayer;
  }

  set showMapLayer(value: boolean) {
    this.settings.showMapLayer = value;
  }
}
