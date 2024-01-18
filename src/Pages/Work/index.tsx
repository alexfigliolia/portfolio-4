import React, { Component } from "react";
import { default as PageSwitch, type PageSwitch as PW } from "pageswitch";
import { Page } from "Components/Page";
import { Poster } from "Components/Poster";
import { Work as WorkState } from "State/Work";
import API from "./API";
import "./styles.scss";

export default class Work extends Component<Record<string, never>> {
  private PW?: PW;

  override componentDidMount() {
    this.PW = new PageSwitch("workSlider", {
      duration: 750,
      direction: 1,
      transition: "scrollCover",
      start: WorkState.getState().index,
      loop: true,
      mousewheel: true,
      mouse: true,
      arrowkey: true,
    });
    this.PW.on("after", index => {
      WorkState.setActive(index);
    });
  }

  override shouldComponentUpdate() {
    return false;
  }

  override componentWillUnmount() {
    if (this.PW) {
      this.PW.destroy();
    }
  }

  override render() {
    return (
      <Page name="work">
        <div id="workSlider">
          {API.map((entry, index) => {
            return <Poster key={entry.name} {...entry} index={index} />;
          })}
        </div>
      </Page>
    );
  }
}
