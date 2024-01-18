import React, { Component } from "react";
import { connectWork } from "State/Work";
import type { IWork } from "Models/types";
import { Menu } from "State/Menu";
import { Title } from "./Title";
import "./styles.scss";

class PosterRenderer extends Component<Props> {
  length: number;
  letters: string[];
  activeDelay: number;
  constructor(props: Props) {
    super(props);
    const { name, active } = this.props;
    this.letters = name.split("");
    this.length = this.letters.filter(v => v !== " ").length;
    this.activeDelay = this.length * 50 + 500;
    if (active) {
      Menu.setButtonDelay(this.activeDelay + 1000);
    }
  }

  public override shouldComponentUpdate({ active }: Props) {
    return active !== this.props.active;
  }

  override render() {
    const { p1, p2, imgSmall, imgLarge, active } = this.props;
    return (
      <div
        className={`poster ${active ? "active" : ""}`}
        style={{
          // @ts-ignore
          "--background-small": `url(${imgSmall})`,
          "--background-large": `url(${imgLarge})`,
        }}>
        <article>
          <Title letters={this.letters} length={this.length} />
          <div
            className="text"
            style={{
              transitionDelay: `${active ? this.activeDelay : 0}ms`,
            }}>
            <p>{p1}</p>
            <p>{p2}</p>
          </div>
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
}

const mSTP = ({ index: activeIndex }: IWork, { index }: OwnProps) => {
  return { active: activeIndex === index };
};

export const Poster = connectWork(mSTP)(PosterRenderer);
