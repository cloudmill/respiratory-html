import React from "react";

import { Words } from "../components/Words";
import { LiSvg } from "../components/LiSvg";

import { SERIES_DURATION as DURATION } from "../constants";

import { Slide } from "./data";

const Features: React.FC<{ features: Feature[] }> = ({ features }) => (
  <ul className="series__features">
    {features.map(({ title, labels, image }, index) => (
      <li key={index} className="series__feature">
        {image && <img className="series__feature-image" src={image} />}
        <div className="series__feature-content">
          <h3 className="series__feature-title">{title}</h3>
          <ul className="series__feature-labels">
            {labels.map((label, index) => (
              <li key={index} className="series__feature-label">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </li>
    ))}
  </ul>
);

const Descriptions: React.FC<{ descriptions: string[] }> = ({
  descriptions,
}) => (
  <ul className="series__descriptions">
    {descriptions.map((description, index) => (
      <li key={index} className="series__description">
        <LiSvg className="series__description-svg" />
        <div className="series__description-text">{description}</div>
      </li>
    ))}
  </ul>
);

type ContentData = Slide;

const Content: React.FC<{
  data: ContentData;
  mode: false | { type: "out" | "in"; dir: "prev" | "next" };
}> = ({ data, mode }) => {
  const { title, descriptions, features, href } = data;

  return (
    <div className="series__main">
      <div className="series__content">
        <p className="series__content-sub-title">Серия респираторов</p>
        <Words duration={Math.floor(DURATION / 2)} move="down-mid">
          {title}
        </Words>
        <Descriptions descriptions={descriptions} />
        <Features features={features} />
      </div>
      <div className="series__watch">
        <a href={href}>Смотреть серию</a>
      </div>
    </div>
  );
};

export { Content };
