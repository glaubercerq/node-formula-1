export interface Team {
  id: number;
  name: string;
  base: string;
}

export interface Driver {
  id: number;
  name: string;
  team: string;
}

export interface DriverParams {
  id: string;
}

export interface TeamParams {
  id: string;
}
