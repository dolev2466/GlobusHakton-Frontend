import * as Cesium from "cesium";

export interface Aircraft {
  callSign: string;
  longitude: number;
  latitude: number;
  altitude: number;
  trueTrack: number;
  verticalRate: number;
}

// origincountry?: string;
// callsign?: string;
// longitude?: number;
// latitude?: number;
// altitude?: number;
// velocity?: number;
// truetrack?: number;
// verticalrate?: number;

export interface User {
  id: number;
  name: string;
}

export interface Plane {
  id: string;
  position: Cesium.Cartesian3;
  name: string;
  image: string;
}

export interface Position {
  lat: number;
  long: number;
  alt: number;
}
