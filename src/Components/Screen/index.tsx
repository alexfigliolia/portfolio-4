import type { ReactNode } from "react";
import React, { Component } from "react";
import type { ReactiveStates } from "@figliolia/react-galena";
import { connectNavigation } from "State/Connections";
import { Burger } from "Components/Burger";
import { Menu } from "Components/Menu";
import "./styles.scss";

class ScreenRenderer extends Component<Props> {
  override render() {
    const { front, back, height, width, classes, screenActive, menuOpen } =
      this.props;
    return (
      <div className={classes} style={{ height, width }}>
        <div className="inner">
          <div className={`front ${menuOpen ? " menu-open" : ""}`}>
            <Menu />
            <div className={`menu-button ${screenActive ? " active" : ""}`}>
              <Burger />
            </div>
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
  screenActive: boolean;
}

const mSTP = ([
  { height, width },
  { loading, classes, screenActive, menuOpen },
]: ReactiveStates<typeof connectNavigation>) => {
  return { height, width, loading, classes, menuOpen, screenActive };
};

export const Screen = connectNavigation(mSTP)(ScreenRenderer);
