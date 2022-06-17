import React from "react";
import classNames from "classnames";

export const Slide = ({ slides, large, small, isAnimate }) => {
  const { prev, current, next } = slides;

  return (
    <div
      className={classNames(
        "slide",
        { "slide--large": large },
        { "slide--small": small }
      )}
    >
      <div className="slide__top">
        <img src={current.src} />
      </div>
      <div className="slide__bottom">
        <div className="slide__panel">panel</div>
        <div className="slide__text">text</div>
      </div>
    </div>
  );
};
