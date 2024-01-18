import { BaseModel } from "./BaseModel";
import type { IWork } from "./types";

export class WorkModel extends BaseModel<IWork> {
  constructor() {
    super("Work", { index: 0 });
  }

  public setActive(index: number) {
    this.priorityUpdate(state => {
      state.index = index;
    });
  }
}
