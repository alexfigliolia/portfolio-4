import React, { Component } from "react";
import type { ReactiveStates } from "@figliolia/react-galena";
import { workConnection } from "State/Connections";
import { Menu } from "State/Menu";
import { Title } from "./Title";
import { Content } from "./Content";
import "./styles.scss";

class PosterRenderer extends Component<Props, State> {
  length: number;
  letters: string[];
  activeDelay: number;
  state: State = { expanded: false };
  constructor(props: Props) {
    super(props);
    const { name, posterActive } = this.props;
    this.letters = name.split("");
    this.length = this.letters.filter(v => v !== " ").length;
    this.activeDelay = this.length * 50 + 500;
    if (posterActive) {
      Menu.setButtonDelay(this.activeDelay + 2200);
    }
  }

  public override shouldComponentUpdate({ active }: Props) {
    return active !== this.props.active;
  }

  override render() {
    const { p1, p2, imgSmall, imgLarge, active, url } = this.props;
    return (
      <div
        className={`poster ${active ? "active" : ""}`}
        style={{
          "--background-small": `url(${imgSmall})`,
          "--background-large": `url(${imgLarge})`,
        }}>
        <article>
          <Title letters={this.letters} length={this.length} />
          <Content
            p1={p1}
            p2={p2}
            url={url}
            active={active}
            delay={this.activeDelay}
          />
        </article>
      </div>
    );
  }
}

interface OwnProps {
  p1: string;
  p2: string;
  url?: string;
  name: string;
  index: number;
  imgSmall: string;
  imgLarge: string;
}

interface Props extends OwnProps {
  active: boolean;
  posterActive: boolean;
}

interface State {
  expanded: boolean;
}

const mSTP = (
  [{ index: activeIndex }, { screenActive }]: ReactiveStates<
    typeof workConnection
  >,
  { index }: OwnProps,
) => {
  const posterActive = activeIndex === index;
  return { active: posterActive && screenActive, posterActive };
};

export const Poster = workConnection(mSTP)(PosterRenderer);
