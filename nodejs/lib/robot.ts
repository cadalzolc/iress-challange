
export interface IToyLocation {
   X: number;
   Y: number;
}

export interface IToyInfo extends IToyLocation {
   DIRECTION: string;
   PLACED: boolean;
}

export interface IMoveResponse {
   Valid: boolean;
   Message: string;
   Location: IToyLocation;
}
