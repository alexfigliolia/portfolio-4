import type { ReactNode } from "react";
import React, { Component } from "react";
import type { IScreen } from "Models/types";
import { connectScreen } from "State/Screen";

class PageRenderer extends Component<Props> {
  render() {
    const { name, height, width, children } = this.props;
    return (
      <main style={{ height, width }} className={`page ${name}`}>
        {children}
      </main>
    );
  }
}

interface Props extends IScreen {
  name: string;
  children: ReactNode;
}

const mSTP = ({ height, width }: IScreen) => {
  return { height, width };
};

export const Page = connectScreen(mSTP)(PageRenderer);
