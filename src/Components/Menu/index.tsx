import React, { Component } from "react";
import type { IMenu } from "Models/types";
import { connectMenu } from "State/Menu";
import { Link } from "./Link";
import "./styles.scss";

class MenuRenderer extends Component<Props> {
  override shouldComponentUpdate({ open }: Props) {
    return open !== this.props.open;
  }

  override render() {
    const { open } = this.props;
    return (
      <nav className={`menu ${open ? "open" : ""}`}>
        <Link id="linkHome" to="Home" />
        <Link id="linkWork" to="Work" />
        <Link id="linkContact" to="Contact" />
      </nav>
    );
  }
}

interface Props {
  open: boolean;
}

const mSTP = ({ menuOpen }: IMenu) => {
  return { open: menuOpen };
};

export const Menu = connectMenu(mSTP)(MenuRenderer);
