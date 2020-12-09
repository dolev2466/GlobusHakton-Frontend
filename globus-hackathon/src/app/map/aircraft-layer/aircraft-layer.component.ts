import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OpenSkyAircraftService } from '../../services/open-sky-aircraft.service';
import { Aircraft } from '../../services/aircraft.model';

@Component({
  selector: 'app-aircraft-layer',
  templateUrl: './aircraft-layer.component.html',
  styleUrls: ['./aircraft-layer.component.sass'],
  providers: [OpenSkyAircraftService],
})
export class AircraftLayerComponent implements OnInit {
  show = true;
  planes$: Observable<Aircraft[]>;

  constructor(openSkyAircraftService: OpenSkyAircraftService) {
    this.planes$ = openSkyAircraftService.get();
  }

  ngOnInit(): void {}
}
