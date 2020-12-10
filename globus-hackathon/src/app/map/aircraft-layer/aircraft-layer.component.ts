import { Component, OnInit } from '@angular/core';
import {from, Observable} from 'rxjs';
import { OpenSkyAircraftService } from '../../services/open-sky-aircraft.service';
import {AcNotification, ActionType, Cartesian2, Cartesian3} from 'angular-cesium';
import {flatMap} from 'rxjs/operators';
// @ts-ignore
import Any = jasmine.Any;
import {Aircraft} from "../../services/aircraft.model";
import {Quaternion} from "cesium";
import {MongoAircraftService} from "../../services/mongo-aircraft.service";

@Component({
  selector: 'app-aircraft-layer',
  templateUrl: './aircraft-layer.component.html',
  styleUrls: ['./aircraft-layer.component.sass'],
  providers: [OpenSkyAircraftService],
})
export class AircraftLayerComponent implements OnInit {
  realAircrafts$: Observable<AcNotification>;
  mongoAircrafts$: Observable<AcNotification>;
  originBottom = Cesium.VerticalOrigin.BOTTOM;
  originTop = Cesium.VerticalOrigin.TOP;
  offset = Cesium.Cartesian2(0, 100);

  constructor(private openSkyAircraftService: OpenSkyAircraftService,
              private mongoAircraftService: MongoAircraftService) {
    this.realAircrafts$ = new Observable<AcNotification>();
    this.mongoAircrafts$ = new Observable<AcNotification>();
  }

  ngOnInit(): void {
    this.realAircrafts$ = from(this.openSkyAircraftService.getAirCrafts()).pipe(
      flatMap(aircrafts => aircrafts.map(aircraft => ({
        id: aircraft.callSign,
        actionType: ActionType.ADD_UPDATE,
        entity: aircraft,
      })))
    );
    this.mongoAircrafts$ = from(this.mongoAircraftService.getAirCrafts()).pipe(
      flatMap(aircrafts => aircrafts.map(aircraft => ({
        id: aircraft.callSign,
        actionType: ActionType.ADD_UPDATE,
        entity: aircraft,
      })))
    );
  }
  getColor(): any {
    return Cesium.Color.WHITE;
  }
  getLabelPosition(planePosition: any): any {
      return planePosition;
  }
  createPosition(lon: number, lat: number, alt: number): Cartesian3 {
    return Cesium.Cartesian3.fromDegrees(lon, lat, alt);
  }
  createOrientation(aircraft: Aircraft): Quaternion {
    const heading = Cesium.Math.toRadians(aircraft.trueTrack - 90.0);
    const pitch = Cesium.Math.toRadians(aircraft.verticalRate);
    const roll = Cesium.Math.toRadians(0);
    const headingPitchRoll = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    return Cesium.Transforms.headingPitchRollQuaternion(this.createPosition(aircraft.longitude,
      aircraft.latitude, aircraft.altitude), headingPitchRoll);
  }
}
