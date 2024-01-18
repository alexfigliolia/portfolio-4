import { BaseModel } from "./BaseModel";
import type { IMenu } from "./types";

export class MenuModel extends BaseModel<IMenu> {
  public toggle() {
    this.update(state => {
      state.menuOpen = !state.menuOpen;
    });
  }

  public setButtonDelay(delay: number) {
    this.update(state => {
      state.buttonDelay = delay;
    });
  }
}
