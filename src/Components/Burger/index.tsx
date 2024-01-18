import React, { Component } from "react";
import type { IMenu } from "Models/types";
import { Menu, connectMenu } from "State/Menu";
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
    Menu.toggle();
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

const mSTP = ({ menuOpen }: IMenu) => {
  return { menuOpen };
};

export const Burger = connectMenu(mSTP)(BurgerButton);
