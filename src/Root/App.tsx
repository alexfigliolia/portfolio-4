import React, { Component } from "react";
import { Screen as ScreenState } from "State/Screen";
import { Routing } from "State/Routing";
import { Screen } from "Components/Screen";
import { ScreenLoader } from "Components/ScreenLoader";
import { Preloader } from "Tools/Preloader";
import { TaskQueue } from "Tools/TaskQueue";
import { Router } from "./Router";
import { Routes } from "./Routes";

// @ts-ignore
void window?.screen?.orientation?.lock?.("portrait").catch(() => {});

export class App extends Component<Record<string, never>> {
  private preloader = Preloader.loadBackground();

  public override componentDidMount() {
    ScreenState.initialize();
    void this.preloader.then(() => {
      TaskQueue.deferTask(() => {
        Routing.show();
      }, 500);
    });
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
        front={<Router default="home" routes={Routes.routes} />}
      />
    );
  }
}
