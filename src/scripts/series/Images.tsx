import classNames from "classnames";
import React from "react";
import {
  SERIES_DURATION as DURATION,
  SERIES_PARALLAX as PARALLAX,
} from "../constants";

export interface Animation {
  prev: string;
  next: string;
  dir: "prev" | "next";
}

const Image = ({ src }) =>
  (src && <img className="series__image" src={src} />) || (
    <div className="series__image" />
  );

const Translate: React.FC<Animation> = ({ prev, next, dir }) => (
  <div
    className={classNames([
      "series__translate",
      { "series__translate--prev": prev && next && dir === "prev" },
      { "series__translate--next": prev && next && dir === "next" },
      { "series__translate--fade--prev": !(prev && next) && dir === 'prev' },
      { "series__translate--fade--next": !(prev && next) && dir === 'next' },
    ])}
    style={
      {
        "--duration": `${DURATION}ms`,
        "--parallax": `${PARALLAX * 100}%`,
      } as React.CSSProperties
    }
  >
    <div className="series__translate-wrapper">
      {dir === "prev" && (
        <div className="series__translate-container">
          {(next && <img className="series__translate-img" src={next} />) || (
            <div className="series__translate-img" />
          )}
        </div>
      )}
      <div className="series__translate-container">
        {(prev && <img className="series__translate-img" src={prev} />) || (
          <div className="series__translate-img" />
        )}
      </div>
      {dir === "next" && (
        <div className="series__translate-container">
          {(next && <img className="series__translate-img" src={next} />) || (
            <div className="series__translate-img" />
          )}
        </div>
      )}
    </div>
  </div>
);

export const Images: React.FC<{
  cur: string;
  animation: false | Animation;
}> = ({ cur, animation }) => {
  return (animation && <Translate {...animation} />) || <Image src={cur} />;
};
