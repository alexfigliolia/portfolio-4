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
      routeName: "home",
      screenActive: false,
      classes: "screen shrink flip",
    });
  }

  public changeRoute(hash: string) {
    this.loading(true);
    this.shrink();
    TaskQueue.deferTask(() => {
      this.flip();
      TaskQueue.deferTask(() => {
        this.activateScreen(false);
        this.setRouteName(hash);
        this.initialize(1000);
      }, RoutingModel.screenInnerTransition);
    }, RoutingModel.shrinkDuration);
  }

  public initialize(wait = 2000) {
    TaskQueue.deferTask(() => {
      this.unFlip();
      this.loading(false);
      TaskQueue.deferTask(() => {
        this.unShrink();
        TaskQueue.deferTask(() => {
          this.activateScreen();
        }, RoutingModel.shrinkDuration);
      }, RoutingModel.screenInnerTransition);
    }, wait);
  }

  public loading(loading: boolean) {
    this.update(state => {
      state.loading = loading;
    });
  }

  public shrink() {
    this.update(state => {
      state.classes = state.classes + " shrink";
    });
  }

  public unShrink() {
    this.update(state => {
      state.classes = state.classes.replace(" shrink", "");
    });
  }

  public flip() {
    this.update(state => {
      state.classes = state.classes + " flip";
    });
  }

  public unFlip() {
    this.update(state => {
      state.classes = state.classes.replace(" flip", "");
    });
  }

  private activateScreen(active = true) {
    this.update(state => {
      state.screenActive = active;
    });
  }

  public setRouteName(hash: string) {
    this.update(state => {
      state.routeName = hash;
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