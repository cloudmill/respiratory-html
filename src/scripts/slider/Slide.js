import React, { useState, useEffect } from "react";
import classNames from "classnames";
import anime from "animejs";
import { getPercent, getTrio } from "../utils";
import { SLIDER_DURATION as DURATION } from "../constants";

export const Slide = ({ index, slides, large, small, isAnimate }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isAnimate) {
      const target = {
        value: 0,
      };

      anime({
        targets: target,

        value: 100,

        duration: DURATION - 100,
        easing: "easeInOutQuint",

        update: () => setProgress(target.value),
      });
    }
  }, [isAnimate]);

  useEffect(() => {
    setTimeout(setProgress(0));
  }, [index]);

  const { prev, current, next } = getTrio(index, slides);

  return (
    <div
      className={classNames(
        "slide",
        { "slide--large": large },
        { "slide--small": small }
      )}
    >
      <div className="slide__top">
        <img
          className="slide__img"
          src={current.src}
          style={{
            clipPath: isAnimate
              ? isAnimate === "prev"
                ? `inset(0 0 0 ${getPercent(progress)})`
                : `inset(0 ${getPercent(progress)} 0 0)`
              : false,
          }}
        />
        {isAnimate === "prev" && (
          <img
            className="slide__img"
            src={prev.src}
            style={{
              clipPath: `inset(0 ${getPercent(100 - progress)} 0 0)`,
            }}
          />
        )}
        {isAnimate === "next" && (
          <img
            className="slide__img"
            src={next.src}
            style={{
              clipPath: `inset(0 0 0 ${getPercent(100 - progress)})`,
            }}
          />
        )}
      </div>
      <div className="slide__bottom">
        <div className="slide__panel">
          {current.day}/{current.month} {current.label}
        </div>
        <div className="slide__text">{current.text}</div>
      </div>
    </div>
  );
};
