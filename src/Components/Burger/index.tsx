import React, { Component } from "react";
import { Routing, connectRouter } from "State/Routing";
import type { IRouting } from "Models/types";
import "./styles.scss";

class BurgerButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  public override shouldComponentUpdate({ menuOpen }: Props) {
    return menuOpen !== this.props.menuOpen;
  }

  private toggle() {
    Routing.toggleMenu();
  }

  override render() {
    const { menuOpen } = this.props;
    return (
      <button
        className={`burger ${menuOpen ? " open" : ""}`}
        onClick={this.toggle}>
        <div>
          <span className="top" />
          <span className="middle" />
          <span className="bottom" />
        </div>
      </button>
    );
  }
}

interface Props {
  menuOpen: boolean;
}

const mSTP = ({ menuOpen }: IRouting) => {
  return { menuOpen };
};

export const Burger = connectRouter(mSTP)(BurgerButton);
