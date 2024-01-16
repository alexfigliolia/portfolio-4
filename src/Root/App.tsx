import React, { Component, lazy } from "react";
import { Routing } from "State/Routing";
import { Screen as ScreenState } from "State/Screen";
import { TaskQueue } from "Tools/TaskQueue";
import { Screen } from "Components/Screen";
import { ScreenLoader } from "Components/ScreenLoader";
import { Preloader } from "Tools/Preloader";
import { TimedPromise } from "Tools/TimedPromise";
import { Router } from "./Router";

export class App extends Component<Props> {
  static routes = {
    home: lazy(() => import("Pages/Home")),
    work: lazy(() => import("Pages/Work")),
    contact: lazy(() => import("Pages/Contact")),
    privacypolicy: lazy(() => import("Pages/PrivacyPolicy")),
  };

  public override componentDidMount() {
    ScreenState.initialize();
    void new TimedPromise({
      threshold: 2000,
      task: () => Preloader.initialize(),
      onReject: ({ remainingMS }) => Routing.initialize(remainingMS),
      onResolve: ({ remainingMS }) => Routing.initialize(remainingMS),
    }).race();
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

type Props = Record<string, never>;
