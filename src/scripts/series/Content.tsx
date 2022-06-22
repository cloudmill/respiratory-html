import React from "react";
import { Slide } from "./data";
import { LiSvg } from "../components/LiSvg";
import { MaskText } from "../components/MaskText";
import { Feature } from "./data";

export interface Animation {
  prev: Slide;
  next: Slide;
  dir: "prev" | "next";
}

const Features: React.FC<{ features: Feature[] }> = ({ features }) => (
  <ul className="series__features">
    {features.map(({ title, labels }, index) => (
      <li key={index} className="series__feature">
        <h3 className="series__feature-title">{title}</h3>
        <ul className="series__feature-labels">
          {labels.map((label, index) => (
            <li key={index} className="series__feature-label">
              {label}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
);

export const Content: React.FC<{
  cur: Slide;
  animation: false | Animation;
}> = ({ cur, animation }) => {
  return (
    <div className="series__main">
      <div className="series__content">
        <p className="series__content-sub-title">Серия респираторов</p>
        <Features features={cur.features} />
      </div>
      <div className="series__watch">watch</div>
    </div>
  );
};
