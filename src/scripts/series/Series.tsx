import React, { useState, useEffect } from "react";
import { Data } from "./data";
import { Tab } from "../components/Tab";
import { SERIES_DURATION as DURATION } from "../constants";

export const Series: React.FC<{ data: Data }> = ({ data }) => {
  const [slide, setSlide] = useState<number>(0);
  const [animation, setAnimation] = useState<
    false | { prev: number; next: number }
  >(false);
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
          <div className="series__place series__place--photo--main">
            <div className="series__photo series__photo--large">
              {(animation && "animation") || (
                <img
                  src={data.slides[slide].images[0]}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
          </div>
          <div className="series__place series__place--photo--1">
            <div className="series__photo series__photo--small">123</div>
          </div>
          <div className="series__place series__place--photo--2">
            <div className="series__photo series__photo--small">123</div>
          </div>
          <div className="series__place series__place--photo--3">
            <div className="series__photo series__photo--small">123</div>
          </div>
        </div>
      </div>
    </div>
  );
};
