import React, { useState, useEffect } from "react";
import { Data } from "./data";
import { Tab } from "../components/Tab";
import { SERIES_DURATION as DURATION } from "../constants";
import { ImageSlider } from "./ImageSlider";

export type Animation = false | { prev: number; next: number };

export const Series: React.FC<{ data: Data }> = ({ data }) => {
  const [slide, setSlide] = useState<number>(0);
  const [animation, setAnimation] = useState<Animation>(false);
  const [active, setActive] = useState<number>(slide);

  const handleChange = (index) => {
    if (index !== active) {
      setActive(index);
    }
  };

  useEffect(() => {
    if (!animation) {
      if (active !== slide) {
        setAnimation({
          prev: slide,
          next: active,
        });

        setTimeout(() => {
          setAnimation(false);
        }, DURATION);
      }
    }
  }, [active]);

  useEffect(() => {
    if (animation) {
      setSlide(animation.next);
    } else {
      if (active !== slide) {
        setAnimation({
          prev: slide,
          next: active,
        });

        setTimeout(() => {
          setAnimation(false);
        }, DURATION);
      }
    }
  }, [animation]);

  return (
    <div className="container">
      <div className="border">
        <div className="series">
          <div className="series__place series__place--title">
            <h2 className="sub-title">продукция</h2>
          </div>
          <div className="series__place series__place--tabs">
            <ul className="series__tabs">
              {data.slides.map((slide, index) => (
                <li key={index} className="series__tabs-item">
                  <Tab
                    onClick={() => handleChange(index)}
                    isActive={index === active}
                  >
                    {slide.title}
                  </Tab>
                </li>
              ))}
            </ul>
          </div>
          <div className="series__place series__place--main">
            <div className="series__main">
              <div className="series__contents">
                {animation && (
                  <div>
                    {animation.prev} - {animation.next}
                  </div>
                )}
              </div>
              <div className="series__watch">123</div>
            </div>
          </div>
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`series__place series__place--photo--${
                index === 0 ? "main" : index
              }`}
            >
              <div
                className={`series__photo series__photo--${
                  index === 0 ? "large" : "small"
                }`}
              >
                <ImageSlider
                  slide={slide}
                  data={data}
                  animation={animation}
                  image={index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
