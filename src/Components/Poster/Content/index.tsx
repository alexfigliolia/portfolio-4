import React, { Component, Fragment } from "react";
import type { CancelFN } from "@figliolia/task-queue";
import { Button3D } from "Components/Button3D";
import { TaskQueue } from "Tools/TaskQueue";
import "./styles.scss";

export class Content extends Component<Props, State> {
  cancelFN?: CancelFN;
  state: State = { expanded: false, reset: false };
  constructor(props: Props) {
    super(props);
    this.visit = this.visit.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  override componentDidMount() {
    if (this.props.active) {
      this.deferReset();
    }
  }

  override UNSAFE_componentWillReceiveProps({ active }: Props) {
    if (active === this.props.active) {
      return;
    }
    if (active) {
      this.deferReset();
    } else {
      this.cancelReset();
    }
  }

  public override shouldComponentUpdate(
    { active }: Props,
    { expanded, reset }: State,
  ) {
    if (active !== this.props.active) return true;
    if (expanded !== this.state.expanded) return true;
    if (reset !== this.state.reset) return true;
    return false;
  }

  public override componentWillUnmount() {
    this.cancelFN?.();
  }

  private deferReset(delay = this.props.delay + 2200) {
    this.cancelFN = TaskQueue.deferTask(() => {
      this.setState({ reset: true });
    }, delay);
  }

  private cancelReset() {
    this.cancelFN?.();
    this.setState({ reset: false });
  }

  private toggle() {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  }

  private visit() {
    window.open(this.props.url, "_blank");
  }

  override render() {
    const { expanded, reset } = this.state;
    const { p1, p2, url, active, delay } = this.props;
    return (
      <Fragment>
        <div
          className={`poster-text ${expanded ? "expanded" : ""}`}
          style={{
            transitionDelay: `${active ? delay : 0}ms`,
          }}>
          <p>{p1}</p>
          <p>{p2}</p>
        </div>
        <div className={`poster-links ${reset ? "reset" : ""}`}>
          <Button3D text="More" onClick={this.toggle} />
          {url && <Button3D text="Visit" onClick={this.visit} />}
        </div>
      </Fragment>
    );
  }
}

interface Props {
  p1: string;
  p2: string;
  url?: string;
  delay: number;
  active: boolean;
}

interface State {
  reset: boolean;
  expanded: boolean;
}
