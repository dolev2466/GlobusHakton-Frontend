import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aircraft } from './aircraft.model';

@Injectable({
  providedIn: 'root',
})
export class OpenSkyAircraftService {
  constructor() {}

  get(): Observable<Aircraft[]> {
    return new Observable((observer) => {
      Array.from({ length: 10_000 }).forEach(() => {
        observer.next(
          Array.from({ length: 1_000 }, (_, i) => ({
            id: i.toString(),
            position: {
              lat: 0,
              long: 0,
              alt: 0,
            },
          }))
        );
      });
    });
  }
}
