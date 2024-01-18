import React, { Component } from "react";
import { Burger } from "Components/Burger";
import { Routing } from "State/Routing";
import type { IRouting } from "Models/types";
import { TaskQueue } from "Tools/TaskQueue";

export class MenuButton extends Component<Props, State> {
  listener?: string;
  state: State = { active: false };
  constructor(props: Props) {
    super(props);
    this.subscription = this.subscription.bind(this);
    this.listener = Routing.subscribe(this.subscription);
  }

  override shouldComponentUpdate(_: Props, { active }: State) {
    return active !== this.state.active;
  }

  override componentWillUnmount() {
    if (this.listener) {
      Routing.unsubscribe(this.listener);
      this.listener = undefined;
    }
  }

  private subscription({ screenActive, menuButtonDelay }: IRouting) {
    const { active } = this.state;
    if (!screenActive && active) {
      return this.setState({ active: false });
    }
    if (screenActive && !active)
      TaskQueue.deferTask(() => {
        this.setState({ active: true });
      }, menuButtonDelay);
  }

  override render() {
    return (
      <div className={`menu-button ${this.state.active ? " active" : ""}`}>
        <Burger />
      </div>
    );
  }
}

type Props = Record<string, never>;

interface State {
  active: boolean;
}
