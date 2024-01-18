export interface IRouting {
  classes: string;
  loading: boolean;
  menuOpen: boolean;
  routeName: string;
  screenActive: boolean;
  menuButtonDelay: number;
}

export interface IScreen {
  width: number;
  height: number;
}

export interface IWork {
  index: number;
}
