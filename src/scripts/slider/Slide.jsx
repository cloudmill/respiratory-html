import React, { useState, useEffect, Fragment } from "react";
import classNames from "classnames";
import anime from "animejs";
import { getPercent, getTrio } from "../utils";
import { SLIDER_DURATION as DURATION } from "../constants";

const GAP = 1.25;

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
    <a
      className={classNames(
        "slide",
        { "slide--large": large },
        { "slide--small": small }
      )}
      href={current.href}
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
        <div className="slide__mark">
          <svg
            className="slide__mark-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M6.00202 1.41528H12.5283C14.7375 1.41528 16.5283 3.20614 16.5283 5.41528V11.9416"
              stroke="white"
              strokeWidth="1.5"
            />
            <line
              y1="-0.75"
              x2="17"
              y2="-0.75"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 13.3862 5.34448)"
              stroke="white"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="slide__bottom">
        <div className="slide__panel">
          <div className="slide__panel-col">
            <div
              className="slide__date"
              style={{
                transform: isAnimate
                  ? isAnimate === "prev"
                    ? `translateY(${getPercent(progress)})`
                    : `translateY(${getPercent(-progress)})`
                  : false,
              }}
            >
              <div className="slide__date-day">{current.day}</div>
              <div className="slide__date-month">/{current.month}</div>
            </div>
            {isAnimate === "prev" && (
              <div
                className="slide__date"
                style={{
                  transform: `translateY(${getPercent(
                    GAP * (100 - progress) * -1
                  )})`,
                }}
              >
                <div className="slide__date-day">{prev.day}</div>
                <div className="slide__date-month">/{prev.month}</div>
              </div>
            )}
            {isAnimate === "next" && (
              <div
                className="slide__date"
                style={{
                  transform: `translateY(${getPercent(
                    GAP * (100 - progress)
                  )})`,
                }}
              >
                <div className="slide__date-day">{next.day}</div>
                <div className="slide__date-month">/{next.month}</div>
              </div>
            )}
            {small &&
              slides.map((slide, index) => (
                <div
                  key={index}
                  className="slide__date"
                  style={{
                    visibility: "hidden",
                    pointerEvents: "none",
                    zIndex: -1,
                    userSelect: "none",
                  }}
                >
                  <div className="slide__date-day">{slide.day}</div>
                  <div className="slide__date-month">/{slide.month}</div>
                </div>
              ))}
          </div>
          <div className="slide__panel-col">
            <div
              className="slide__label"
              style={{
                transform: isAnimate
                  ? isAnimate === "prev"
                    ? `translateY(${getPercent(GAP * progress)})`
                    : `translateY(${getPercent(GAP * progress * -1)})`
                  : false,
              }}
            >
              <div className="slide__label-button">{current.label}</div>
            </div>
            {isAnimate === "prev" && (
              <div
                className="slide__label"
                style={{
                  transform: `translateY(${getPercent(
                    GAP * ((100 - progress) * -1)
                  )})`,
                }}
              >
                <div className="slide__label-button">{prev.label}</div>
              </div>
            )}
            {isAnimate === "next" && (
              <div
                className="slide__label"
                style={{
                  transform: `translateY(${getPercent(
                    GAP * (100 - progress)
                  )})`,
                }}
              >
                <div className="slide__label-button">{next.label}</div>
              </div>
            )}
          </div>
        </div>
        <div className="slide__text-wrapper">
          <div className="slide__text">
            {current.text.split(" ").map((word, index) => (
              <Fragment key={index}>
                <span className="slide__word-wrapper">
                  <span className="slide__word">
                    <span
                      className="slide__word-text"
                      style={{
                        transform: isAnimate
                          ? isAnimate === "prev"
                            ? `translateY(${getPercent(
                                GAP * Math.min(progress * 2, 100)
                              )})`
                            : `translateY(${getPercent(
                                GAP * Math.min(progress * 2, 100) * -1
                              )})`
                          : false,
                      }}
                    >
                      {word}
                    </span>
                  </span>
                </span>{" "}
              </Fragment>
            ))}
          </div>
          {isAnimate === "prev" && (
            <div className="slide__text">
              {prev.text.split(" ").map((word, index) => (
                <Fragment key={index}>
                  <span className="slide__word-wrapper">
                    <span className="slide__word">
                      <span
                        className="slide__word-text"
                        style={{
                          transform: `translateY(${getPercent(
                            GAP * (100 - Math.max(0, -50 + progress) * 2) * -1
                          )})`,
                        }}
                      >
                        {word}
                      </span>
                    </span>
                  </span>{" "}
                </Fragment>
              ))}
            </div>
          )}
          {isAnimate === "next" && (
            <div className="slide__text">
              {next.text.split(" ").map((word, index) => (
                <Fragment key={index}>
                  <span className="slide__word-wrapper">
                    <span className="slide__word">
                      <span
                        className="slide__word-text"
                        style={{
                          transform: `translateY(${getPercent(
                            GAP * (100 - Math.max(0, -50 + progress) * 2)
                          )})`,
                        }}
                      >
                        {word}
                      </span>
                    </span>
                  </span>{" "}
                </Fragment>
              ))}
            </div>
          )}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="slide__text"
              style={{
                visibility: "hidden",
                pointerEvents: "none",
                zIndex: -1,
                userSelect: "none",
              }}
            >
              {slide.text.split(" ").map((word, index) => (
                <Fragment key={index}>
                  <span className="slide__word-wrapper">
                    <span className="slide__word">
                      <span className="slide__word-text">{word}</span>
                    </span>
                  </span>{" "}
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};
