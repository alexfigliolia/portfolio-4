import React, { Component } from "react";
import { Screen as ScreenState } from "State/Screen";
import { TaskQueue } from "Tools/TaskQueue";
import { Screen } from "Components/Screen";
import { ScreenLoader } from "Components/ScreenLoader";
import { Preloader } from "Tools/Preloader";
import { Router } from "./Router";
import type { ComponentModule, WrappedLoader } from "./types";

export class App extends Component<Record<string, never>> {
  static preloaded = false;
  static routes = {
    home: this.wrapLoader(() => import("Pages/Home")),
    work: this.wrapLoader(() => import("Pages/Work")),
    contact: this.wrapLoader(() => import("Pages/Contact")),
    privacypolicy: this.wrapLoader(() => import("Pages/PrivacyPolicy")),
  };

  static wrapLoader(loader: () => Promise<ComponentModule>) {
    return () =>
      new Promise<ComponentModule>(resolve => {
        const promises: WrappedLoader = [loader()];
        if (!this.preloaded) {
          this.preloaded = true;
          promises.push(Preloader.initialize());
        }
        void Promise.all(promises).then(([component]) => {
          resolve(component);
        });
      });
  }

  public override componentDidMount() {
    ScreenState.initialize();
  }

  public override shouldComponentUpdate() {
    return false;
  }

  public override componentWillUnmount() {
    ScreenState.destroy();
    TaskQueue.clearPendingTasks();
  }

  override render() {
    return (
      <Screen
        back={<ScreenLoader />}
        front={<Router default="home" routes={App.routes} />}
      />
    );
  }
}
