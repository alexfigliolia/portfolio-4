import React, { Component } from "react";
import { Routing } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";
import { RoutingModel } from "Models/RoutingModel";
import "./styles.scss";

export class Link extends Component<Props> {
  override shouldComponentUpdate() {
    return false;
  }

  private nav = () => {
    window.location.hash = `#${this.props.to}`;
    TaskQueue.deferTask(() => {
      Routing.toggleMenu();
    }, RoutingModel.shrinkAndFlipDuration);
  };

  public override render() {
    const { id, letters } = this.props;
    return (
      <button id={id} onClick={this.nav} className="link">
        {letters.map((letter, i) => {
          return (
            <div key={`${letter}-${i}`} className="link-letter">
              {letter}
            </div>
          );
        })}
      </button>
    );
  }
}

interface Props {
  id: string;
  to: string;
  letters: string[];
}
