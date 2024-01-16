import React, { Component } from "react";
import "./styles.scss";

export class Link extends Component<Props> {
  override shouldComponentUpdate() {
    return false;
  }

  public override render() {
    const { id, letters } = this.props;
    return (
      <button id={id} className="link">
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
  letters: string[];
}
