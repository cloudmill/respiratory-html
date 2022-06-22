import React from "react";
import { Slide } from "./data";
import { LiSvg } from "../components/LiSvg";
import { MaskText } from "../components/MaskText";

export interface Animation {
  prev: Slide;
  next: Slide;
  dir: "prev" | "next";
}

export const Content: React.FC<{
  cur: Slide;
  animation: false | Animation;
}> = ({ cur, animation }) => {
  return (
    <div className="series__main">
      <div className="series__content">
        <p className="series__content-sub-title">Серия респираторов</p>
        <MaskText className="series__content-title">123 123</MaskText>
      </div>
      <div className="series__watch">watch</div>
    </div>
  );
};
