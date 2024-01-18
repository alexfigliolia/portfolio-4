import type { ReactNode } from "react";
import React, { Component } from "react";
import type { ReactiveStates } from "@figliolia/react-galena";
import { connectNavigation } from "State/Connections";
import { Menu } from "Components/Menu";
import { MenuButton } from "./MenuButton";
import "./styles.scss";

class ScreenRenderer extends Component<Props> {
  override render() {
    const { front, back, height, width, classes, menuOpen } = this.props;
    return (
      <div className={classes} style={{ height, width }}>
        <div className="inner">
          <div className={`front ${menuOpen ? " menu-open" : ""}`}>
            <Menu />
            <MenuButton />
            {front}
          </div>
          <div className="back">{back}</div>
        </div>
      </div>
    );
  }
}

interface Props {
  width: number;
  height: number;
  classes: string;
  back: ReactNode;
  front: ReactNode;
  loading: boolean;
  menuOpen: boolean;
}

const mSTP = ([
  { height, width },
  { loading, classes, menuOpen },
]: ReactiveStates<typeof connectNavigation>) => {
  return { height, width, loading, classes, menuOpen };
};

export const Screen = connectNavigation(mSTP)(ScreenRenderer);
