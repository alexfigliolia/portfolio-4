import { BaseModel } from "./BaseModel";
import type { IScreen } from "./types";

export class ScreenModel extends BaseModel<IScreen> {
  constructor() {
    super("Screen", {
      width: window.innerWidth,
      height: window.innerHeight,
    });
    this.onResize = this.onResize.bind(this);
  }

  public initialize() {
    window.addEventListener("resize", this.onResize);
  }

  public destroy() {
    window.removeEventListener("resize", this.onResize);
  }

  public onResize() {
    this.priorityUpdate(state => {
      state.width = window.innerWidth;
      state.height = window.innerHeight;
    });
  }
}
