import React, { useState, useEffect } from "react";
import { Data } from "./data";
import { Animation } from "./Series";
import anime from "animejs";
import { SERIES_DURATION as DURATION, SERIES_PARALLAX as PARALLAX } from "../constants";

export const ImageSlider: React.FC<{
  slide: number;
  data: Data;
  animation: Animation;
  image: number;
}> = ({ slide, data, animation, image }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animation) {
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
    } else {
      setProgress(0);
    }
  }, [animation]);

  const getTranslate = () => {
    if (animation) {
      if (animation.prev < animation.next) {
        return progress;
      } else {
        return -progress;
      }
    }
  };

  return (
    (animation && (
      <div className="image-slider">
        <div
          className="image-slider__wrapper"
          style={{
            transform: `translateX(${
              animation.prev < animation.next ? progress * -1 : -100 + progress
            }%)`,
          }}
        >
          {animation.prev > animation.next && (
            <div className="image-slider__container">
              <img
                className="image-slider__img"
                src={data.slides[animation.next].images[image]}
                style={{
                  transform: `translateX(${(100 - progress) * PARALLAX}%)`,
                }}
              />
            </div>
          )}
          <div className="image-slider__container">
            <img
              className="image-slider__img"
              src={data.slides[animation.prev].images[image]}
              style={{
                transform: `translateX(${
                  animation.prev < animation.next
                    ? progress * PARALLAX
                    : progress * PARALLAX * -1
                }%)`,
              }}
            />
          </div>
          {animation.prev < animation.next && (
            <div className="image-slider__container">
              <img
                className="image-slider__img"
                src={data.slides[animation.next].images[image]}
                style={{
                  transform: `translateX(${(100 - progress) * PARALLAX * -1}%)`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    )) || (
      <img
        src={data.slides[slide].images[image]}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    )
  );
};
