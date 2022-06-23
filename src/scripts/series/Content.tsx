import classNames from "classnames";
import React, { useState, useEffect } from "react";
import { LiSvg } from "../components/LiSvg";
import { Feature, Slide } from "./data";
import { Words } from "../components/Words";
import { SERIES_DURATION as DURATION } from "../constants";
import { Animation as SliderAnimation } from "./Slider";

export interface Animation {
  prev: Slide;
  next: Slide;
  dir: "prev" | "next";
}

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

const Content: React.FC<{
  slide: Slide;
  animation?: boolean;
}> = ({ slide, animation }) => {
  return (
    <div className="series__main">
      <div className="series__content">
        <p className="series__content-sub-title">Серия респираторов</p>
        <Words duration={DURATION / 2} move={!!animation && "up"}>
          {slide.title}
        </Words>
        <Descriptions descriptions={slide.descriptions} />
        <Features features={slide.features} />
      </div>
      <div className="series__watch">watch</div>
    </div>
  );
};

export const Contents: React.FC<{
  slides: Slide[];
  cur: number;
  animation: false | SliderAnimation;
}> = ({ slides, cur, animation }) => {
  const [transition, setTransition] = useState<false | "prev" | "next">(false);

  useEffect(() => {
    if (!animation) {
      setTransition(false);
    } else {
      setTransition("prev");
      setTimeout(() => setTransition("next"), Math.floor(DURATION / 2));
    }
  }, [animation]);

  return (
    <ul className="series__slides">
      {slides.map((slide, index) => (
        <li
          key={index}
          className={classNames([
            "series__slide",
            { "series__slide--active": !transition && cur ||  === index },
          ])}
        >
          <Content slide={slide} />
        </li>
      ))}
    </ul>
  );
};
