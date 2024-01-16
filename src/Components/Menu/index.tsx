import React, { Component } from "react";
import type { IRouting } from "Models/types";
import { connectRouter } from "State/Routing";
import { Link } from "./Link";
import "./styles.scss";

class MenuRenderer extends Component<Props> {
  static home = "HOME".split("");
  static work = "WORK".split("");
  static contact = "CONTACT".split("");

  override shouldComponentUpdate({ open }: Props) {
    return open !== this.props.open;
  }

  override render() {
    const { open } = this.props;
    return (
      <nav className={`menu ${open ? "open" : ""}`}>
        <Link id="linkHome" to="Home" letters={MenuRenderer.home} />
        <Link id="linkWork" to="Work" letters={MenuRenderer.work} />
        <Link id="linkContact" to="Contact" letters={MenuRenderer.contact} />
      </nav>
    );
  }
}

interface Props {
  open: boolean;
}

const mSTP = ({ menuOpen }: IRouting) => {
  return { open: menuOpen };
};

export const Menu = connectRouter(mSTP)(MenuRenderer);
