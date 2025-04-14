export interface Location {
  x: number;
  y: number;
}

export interface Callout {
  regionName: string;
  superRegionName: string;
  location: Location;
}

export interface Map {
  uuid: string;
  displayName: string;
  narrativeDescription: string | null;
  tacticalDescription: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  listViewIconTall: string;
  splash: string;
  stylizedBackgroundImage: string;
  premierBackgroundImage: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: Callout[];
}
