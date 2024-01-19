import type { MouseEvent } from "react";

export type Coordinate = [x: number, y: number];

export interface Props {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
