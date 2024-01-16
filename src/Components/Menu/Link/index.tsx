import React, { Component } from "react";
import "./styles.scss";
import { Routing } from "State/Routing";
import { TaskQueue } from "Tools/TaskQueue";

export class Link extends Component<Props> {
  override shouldComponentUpdate() {
    return false;
  }

  private nav = () => {
    Routing.toggleMenu();
    TaskQueue.deferTask(() => {
      window.location.hash = `#${this.props.to}`;
    }, 1600);
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
