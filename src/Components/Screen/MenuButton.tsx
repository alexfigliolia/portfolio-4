import React, { Component } from "react";
import { Burger } from "Components/Burger";
import { connectRouter } from "State/Routing";
import type { IRouting } from "Models/types";

class MenuButtonRenderer extends Component<Props> {
  override shouldComponentUpdate({ active }: Props) {
    return active !== this.props.active;
  }

  override render() {
    return (
      <div className={`menu-button ${this.props.active ? " active" : ""}`}>
        <Burger />
      </div>
    );
  }
}

interface Props {
  active: boolean;
}

const mSTP = ({ screenActive }: IRouting) => {
  return { active: screenActive };
};

export const MenuButton = connectRouter(mSTP)(MenuButtonRenderer);
