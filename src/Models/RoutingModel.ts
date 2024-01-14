import { TaskQueue } from "Tools/TaskQueue";
import variables from "Styles/exports.module.scss";
import { BaseModel } from "./BaseModel";
import type { IRouting } from "./types";

export class RoutingModel extends BaseModel<IRouting> {
  static screenInnerTransition = this.sliceUnits(
    variables.screenInnerTransition,
  );
  static smallScreenTransition = this.sliceUnits(
    variables.smallScreenTransition,
  );
  static largeScreenTransition = this.sliceUnits(
    variables.largeScreenTransition,
  );
  constructor() {
    super("Router", {
      loading: true,
      classes: "screen shrink flip",
    });
  }

  public changeRoute(hash: string) {
    this.loading(true);
    this.shrink();
    TaskQueue.deferTask(() => {
      this.flip();
      TaskQueue.deferTask(() => {
        window.location.hash = hash;
        this.initialize(1000);
      }, RoutingModel.screenInnerTransition);
    }, RoutingModel.shrinkDuration);
  }

  public initialize(wait = 1500, callback?: () => void) {
    TaskQueue.deferTask(() => {
      this.unFlip();
      this.loading(false);
      TaskQueue.deferTask(() => {
        this.unShrink();
        TaskQueue.deferTask(() => {
          callback?.();
        }, RoutingModel.shrinkDuration);
      }, RoutingModel.screenInnerTransition);
    }, wait);
  }

  public loading(loading: boolean) {
    return this.update(state => {
      state.loading = loading;
    });
  }

  public shrink() {
    return this.update(state => {
      state.classes = state.classes + " shrink";
    });
  }

  public unShrink() {
    return this.update(state => {
      state.classes = state.classes.replace(" shrink", "");
    });
  }

  public flip() {
    return this.update(state => {
      state.classes = state.classes + " flip";
    });
  }

  public unFlip() {
    return this.update(state => {
      state.classes = state.classes.replace(" flip", "");
    });
  }

  private static get shrinkDuration() {
    if (window.innerWidth < 957) {
      return this.smallScreenTransition;
    }
    return this.largeScreenTransition;
  }

  private static sliceUnits(duration: string) {
    return parseInt(duration.slice(0, -2));
  }
}
