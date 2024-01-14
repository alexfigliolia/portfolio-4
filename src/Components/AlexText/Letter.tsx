import type { IRouting } from "Models/types";
import { connectRouter } from "State/Routing";
import React, { Component } from "react";

class LetterRenderer extends Component<Props> {
  override shouldComponentUpdate({ active }: Props) {
    return active !== this.props.active;
  }

  override render() {
    const { letter, delay, active } = this.props;
    return (
      <div
        className={active ? "active" : ""}
        style={{
          transform: `scale(${active ? 1 : 0}) rotateX(${
            active ? 0 : 180
          }deg) translateY(${active ? 0 : -150}%)`,
          transition: `opacity 1s ${delay}ms, transform 1.75s ${delay}ms cubic-bezier(0.34, 1.56, 0.64, 1)`,
        }}>
        {letter}
      </div>
    );
  }
}

interface Props {
  delay: number;
  letter: string;
  active: boolean;
}

const mSTP = ({ screenActive }: IRouting) => {
  return { active: screenActive };
};

export const Letter = connectRouter(mSTP)(LetterRenderer);
