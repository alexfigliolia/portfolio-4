import React, { Component } from "react";
import type { ReactiveStates } from "@figliolia/react-galena";
import { TaskQueue } from "Tools/TaskQueue";
import { RoutingModel } from "Models/RoutingModel";
import { Menu } from "State/Menu";
import { connectRoutingAndMenu } from "State/Connections";
import "./styles.scss";

export class LinkRenderer extends Component<Props, State> {
  state: State = { canHover: false };
  private readonly letters: string[];
  private readonly hoverDelay: number;
  constructor(props: Props) {
    super(props);
    const { to } = this.props;
    this.letters = to.toUpperCase().split("");
    this.hoverDelay = this.letters.length * 50 + 2200;
  }

  override shouldComponentUpdate({ active }: Props, { canHover }: State) {
    if (active !== this.props.active) return true;
    if (canHover !== this.state.canHover) return true;
    return false;
  }

  override UNSAFE_componentWillReceiveProps({ menuOpen }: Props) {
    if (menuOpen === this.props.menuOpen) {
      return;
    }
    if (menuOpen) {
      return this.activateHovering();
    }
    this.setState({ canHover: false });
  }

  private nav = () => {
    window.location.hash = `#${this.props.to}`;
    TaskQueue.deferTask(() => {
      Menu.toggle();
    }, RoutingModel.shrinkAndFlipDuration);
  };

  private activateHovering() {
    TaskQueue.deferTask(() => {
      this.setState({ canHover: true });
    }, this.hoverDelay);
  }

  public override render() {
    const { canHover } = this.state;
    const { id, active } = this.props;
    return (
      <button
        id={id}
        onClick={this.nav}
        className={`link ${active ? "active" : ""} ${
          canHover ? "can-hover" : ""
        }`}>
        {this.letters.map((letter, i) => {
          return (
            <span key={`${letter}-${i}`} className="link-letter">
              {letter}
            </span>
          );
        })}
      </button>
    );
  }
}

interface OwnProps {
  id: string;
  to: string;
}

interface Props extends OwnProps {
  active: boolean;
  menuOpen: boolean;
}

interface State {
  canHover: boolean;
}

const mSTP = (
  [{ menuOpen }, { routeName }]: ReactiveStates<typeof connectRoutingAndMenu>,
  { to }: OwnProps,
) => {
  return {
    menuOpen,
    active: routeName.toLowerCase() === to.toLowerCase(),
  };
};

export const Link = connectRoutingAndMenu(mSTP)(LinkRenderer);
