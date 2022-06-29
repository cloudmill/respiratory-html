import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { Words } from "../components/Words";
import { LiSvg } from "../components/LiSvg";
import { FadeContainer } from "../components/FadeContainer";

import { SERIES_DURATION as DURATION } from "../constants";

import { Slide, Feature } from "./data";
import { Animation as SliderAnimation } from "./Slider";
import { Move as WordsMove } from "../components/Words";

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

type Mode = false | "in" | "out";
type Direction = "prev" | "next";

const Content: React.FC<{
  slide: Slide;
  mode: Mode;
  dir?: Direction;
}> = ({ slide, mode, dir }) => {
  const { title, descriptions, features, href } = slide;

  const getMove = (mode: Mode, dir: Direction): WordsMove => {
    if (mode === "in") {
      if (dir === "next") {
        return "down-mid";
      } else {
        return "up-mid";
      }
    } else {
      if (dir === "next") {
        return "mid-up";
      } else {
        return "mid-down";
      }
    }
  };

  return (
    <div className="series__main">
      <div className="series__content">
        <FadeContainer duration={Math.floor(DURATION / 2)} move={mode}>
          <p className="series__content-sub-title">Серия респираторов</p>
        </FadeContainer>
        <Words
          duration={Math.floor(DURATION / 2)}
          move={(dir && getMove(mode, dir)) || false}
        >
          {title}
        </Words>
        <FadeContainer duration={Math.floor(DURATION / 2)} move={mode}>
          <Descriptions descriptions={descriptions} />
          <Features features={features} />
        </FadeContainer>
      </div>
      <div className="series__watch">
        <FadeContainer duration={Math.floor(DURATION / 2)} move={mode}>
          <div className="press press--info">
            <a className="press__btn" href={href}>
              <div className="press__content">
                <div className="press__content-item press__content-item--start">
                  <div className="press__text press__text--start">
                    Смотреть серию
                  </div>
                </div>
                <div className="press__content-item press__content-item--end">
                  <div className="press__text press__text--end">
                    Смотреть серию
                  </div>
                </div>
              </div>
              <div className="press__bg">
                <div className="press__bg-item press__bg-item--start"></div>
                <div className="press__bg-item press__bg-item--end"></div>
              </div>
              <div className="press__decor">
                <div className="press__decor-item press__decor-item--start">
                  <div className="press__decor-arrow"></div>
                  <div className="press__decor-arrow"></div>
                </div>
                <div className="press__decor-item press__decor-item--end">
                  <div className="press__decor-arrow"></div>
                  <div className="press__decor-arrow"></div>
                </div>
              </div>
            </a>
          </div>
        </FadeContainer>
      </div>
    </div>
  );
};

type Transition = false | "start" | "end";

const Contents: React.FC<{
  slides: Slide[];
  slide: number;
  animation: SliderAnimation;
}> = ({ slides, slide, animation }) => {
  const [transition, setTransition] = useState<Transition>(false);

  useEffect(() => {
    console.log({
      slides,
      slide,
      animation,
    });
  });

  useEffect(() => {
    if (animation) {
      setTransition("start");

      setTimeout(() => {
        setTransition("end");
      }, Math.round(DURATION / 2));
    } else {
      setTransition(false);
    }
  }, [animation]);

  return (
    <div className="series__slides">
      {slides.map((slide, index) => (
        <div key={index} className="series__slide">
          <Content slide={slide} mode={false} />
        </div>
      ))}
      <div className={classNames(["series__slide", "series__slide--active"])}>
        {(animation &&
          ((transition === "start" && (
            <Content
              slide={slides[animation.prev]}
              mode="out"
              dir={animation.prev < animation.next ? "next" : "prev"}
            />
          )) || (
            <Content
              slide={slides[animation.next]}
              mode="in"
              dir={animation.prev < animation.next ? "next" : "prev"}
            />
          ))) || <Content slide={slides[slide]} mode={false} />}
      </div>
    </div>
  );
};

export { Contents };
