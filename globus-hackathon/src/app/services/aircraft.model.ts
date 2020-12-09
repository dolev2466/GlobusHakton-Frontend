export interface Aircraft {
  id: string;
  flightNumber?: string;
  callSign?: string;
  from?: string;
  to?: string;
  heading?: number;
  position: Position;
  groundSpeed?: number;
  type?: string;
}

export interface Position {
  lat: number;
  long: number;
  alt: number;
}
