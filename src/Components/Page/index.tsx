import type { FC, ReactNode } from "react";
import React, { useLayoutEffect, useRef } from "react";
import { useScreen } from "State/Screen";
import { Ripples } from "@figliolia/ripples";

export const Page: FC<Props> = ({ name, children }) => {
  const RIPRef = useRef<Ripples | null>(null);
  const DOMRef = useRef<null | HTMLElement>(null);
  const width = useScreen(state => state.width);
  const height = useScreen(state => state.height);
  useLayoutEffect(() => {
    if (!DOMRef.current) {
      return;
    }
    RIPRef.current = new Ripples(DOMRef.current, {
      resolution: 512,
      dropRadius: 10,
      perturbance: 0.02,
    });
    return () => {
      RIPRef.current?.destroy();
    };
  }, []);
  return (
    <main
      id="page"
      ref={DOMRef}
      style={{ height, width }}
      className={`page ${name}`}>
      {children}
    </main>
  );
};

interface Props {
  name: string;
  children: ReactNode;
}
