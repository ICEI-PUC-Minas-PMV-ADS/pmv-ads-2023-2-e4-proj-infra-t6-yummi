export interface IAsset {
  id: number;
  status: StatusEnum;
  assignedUserIds: number[];
  name: string;
  model: string;
  companyId: number;
  healthHistory: IAssetHealthHistory[];
  healthscore: number;
  image: string;
  metrics: IAssetMetrics;
  specifications: IAssetSpecifications;
  unitId: number;
  sensors: string[];
}

export interface IAssetHealthHistory {
  status: string;
  timestamp: string;
}

export interface IAssetMetrics {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

export interface IAssetSpecifications {
  maxTemp?: number | null;
  power?: number | null;
  rpm?: number | null;
}

export enum StatusEnum {
  InAlert = 'inAlert',
  InDowntime = 'inDowntime',
  InOperation = 'inOperation',
  PlannedStop = 'plannedStop',
  UnplannedStop = 'unplannedStop'
}
