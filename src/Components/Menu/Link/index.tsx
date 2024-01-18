import React, { Component } from "react";
import { connectRouter } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import { RoutingModel } from "Models/RoutingModel";
import type { IRouting } from "Models/types";
import { Menu } from "State/Menu";
import "./styles.scss";

export class LinkRenderer extends Component<Props> {
  override shouldComponentUpdate({ active }: Props) {
    return active !== this.props.active;
  }

  private nav = () => {
    window.location.hash = `#${this.props.to}`;
    TaskQueue.deferTask(() => {
      Menu.toggle();
    }, RoutingModel.shrinkAndFlipDuration);
  };

  public override render() {
    const { id, letters, active } = this.props;
    return (
      <button
        id={id}
        onClick={this.nav}
        className={`link ${active ? "active" : ""}`}>
        {letters.map((letter, i) => {
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
  letters: string[];
}

interface Props extends OwnProps {
  active: boolean;
}

const mSTP = ({ routeName }: IRouting, { to }: OwnProps) => {
  return { active: routeName.toLowerCase() === to.toLowerCase() };
};

export const Link = connectRouter(mSTP)(LinkRenderer);
