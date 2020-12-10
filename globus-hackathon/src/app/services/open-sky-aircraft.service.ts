import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import {Aircraft} from './aircraft.model';
import { HttpClient } from '@angular/common/http';
import {interval} from 'rxjs';
import {flatMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class OpenSkyAircraftService {
  constructor( private http: HttpClient) {}

  getAirCrafts(): Observable<Aircraft[]>{
    return interval(5_000).pipe(flatMap(() =>
      this.http.get<Aircraft[]>('https://globus-hackathon-opensky.herokuapp.com/OpenSky')));
  }
}
