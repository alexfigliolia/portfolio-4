import type { MouseEvent, TouchEvent } from "react";
import React, { Component } from "react";
import type { Coordinate, Props } from "./types";
import "./styles.scss";

export class Button3D extends Component<Props, State> {
  private top = 0;
  private left = 0;
  private width = 0;
  private height = 0;
  constructor(props: Props) {
    super(props);
    this.state = {
      rotX: 0,
      rotY: 0,
      scale: 1,
      bTransDur: 0.5,
      boxShadow: "none",
    };
    this.touchMoveButton = this.touchMoveButton.bind(this);
    this.mouseMoveButton = this.mouseMoveButton.bind(this);
    this.touchEnterButton = this.touchEnterButton.bind(this);
    this.mouseEnterButton = this.mouseEnterButton.bind(this);
    this.mouseLeaveButton = this.mouseLeaveButton.bind(this);
  }

  override shouldComponentUpdate(
    _: Props,
    { rotX, rotY, bTransDur, scale, boxShadow }: State,
  ) {
    const curState = this.state;
    if (rotX !== curState.rotX) return true;
    else if (rotY !== curState.rotY) return true;
    else if (scale !== curState.scale) return true;
    else if (bTransDur !== curState.bTransDur) return true;
    else if (boxShadow !== curState.boxShadow) return true;
    return false;
  }

  private cacheTargetData(eventTarget: EventTarget) {
    const target = eventTarget as HTMLButtonElement;
    const { top, left, height, width } = target.getBoundingClientRect();
    this.top = top;
    this.height = height;
    const offset = width * 0.2;
    this.left = left - offset / 2;
    this.width = width + width * 0.2;
  }

  private getRotations(x: number, y: number): [x: number, y: number] {
    const mouseY = y - this.top;
    const mouseX = x - this.left;
    const offsetX = 0.5 - mouseX / this.width;
    const offsetY = 0.5 - mouseY / this.height;
    return [offsetY * 50, offsetX * 20];
  }

  private setFrame([x, y]: Coordinate, duration: number) {
    this.setState({
      rotX: x,
      rotY: y,
      bTransDur: `${duration}s`,
      scale: 1.1,
      boxShadow: `0 ${x}px ${
        this.height / 5
      }px rgba(0,0,0,0.5), ${x}px ${y}px ${this.width / 5}px rgba(0,0,0,0.45)`,
    });
  }

  private mouseEnterButton({
    clientX,
    clientY,
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) {
    this.cacheTargetData(currentTarget);
    this.setFrame(this.getRotations(clientX, clientY), 0.5);
  }

  private touchEnterButton({
    currentTarget,
    touches,
  }: TouchEvent<HTMLButtonElement>) {
    this.cacheTargetData(currentTarget);
    this.setFrame(
      this.getRotations(touches[0].clientX, touches[0].clientY),
      0.5,
    );
  }

  private mouseMoveButton({ clientX, clientY }: MouseEvent<HTMLButtonElement>) {
    this.setFrame(this.getRotations(clientX, clientY), 0);
  }

  private touchMoveButton({ touches }: TouchEvent<HTMLButtonElement>) {
    this.setFrame(this.getRotations(touches[0].clientX, touches[0].clientY), 0);
  }

  private mouseLeaveButton() {
    this.setState({
      rotX: 0,
      rotY: 0,
      scale: 1,
      bTransDur: "0.5s",
      boxShadow: "none",
    });
  }

  override render() {
    const { text, onClick } = this.props;
    const { rotX, rotY, bTransDur, scale, boxShadow } = this.state;
    return (
      <button
        onClick={onClick}
        className="outline-button"
        onMouseEnter={this.mouseEnterButton}
        onMouseMove={this.mouseMoveButton}
        onMouseLeave={this.mouseLeaveButton}
        onTouchStart={this.touchEnterButton}
        onTouchEnd={this.mouseLeaveButton}
        onTouchMove={this.touchMoveButton}
        style={{
          transform: `rotateX(${rotX}deg) rotateY(${rotY}deg) skew(-10deg) scale(${scale})`,
          transitionDuration: `${bTransDur}`,
          boxShadow,
        }}>
        <div>{text}</div>
      </button>
    );
  }
}

interface State {
  rotX: number;
  rotY: number;
  bTransDur: number | string;
  scale: number;
  boxShadow: string;
}

export * from "./types";
