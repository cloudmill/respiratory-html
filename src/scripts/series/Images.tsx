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
      { "series__translate--image-image": prev && next },
      { "series__translate--image-empty": prev && !next },
      { "series__translate--empty-image": !prev && next },
      `series__translate--${dir}`,
    ])}
    style={
      {
        "--duration": `${DURATION}ms`,
        "--parallax": `${PARALLAX * 100}%`,
      } as React.CSSProperties
    }
  >
    <div className="series__translate-wrapper">
      {(prev && next && (
        <>
          {dir === "prev" && (
            <div className="series__translate-container">
              <img className="series__translate-img" src={next} />
            </div>
          )}
          <div className="series__translate-container">
            <img className="series__translate-img" src={prev} />
          </div>
          {dir === "next" && (
            <div className="series__translate-container">
              <img className="series__translate-img" src={next} />
            </div>
          )}
        </>
      )) ||
        (prev && !next && (
          <div className="series__translate-container">
            <img className="series__translate-img" src={prev} />
          </div>
        )) ||
        (!prev && next && (
          <div className="series__translate-container">
            <img className="series__translate-img" src={next} />
          </div>
        ))}
    </div>
  </div>
);

export const Images: React.FC<{
  cur: string;
  animation: false | Animation;
}> = ({ cur, animation }) => {
  return (animation && <Translate {...animation} />) || <Image src={cur} />;
};
