import React, { useEffect, useState, useCallback, useMemo } from "react";
import classNames from "classnames";

import { Data } from "./Data";
import { Images, Animation as ImagesAnimation } from "./Images";

import { SubTitle } from "../components/SubTitle";
import { Tabs } from "./Tabs";
import { LoadImages } from "../components/LoadImages";
import { Contents } from "./Content";

import { SERIES_DURATION as DURATION } from "../constants";

type Animation =
  | false
  | {
      prev: number;
      next: number;
    };

const Slider: React.FC<{ data: Data; onLoad: () => void }> = ({
  data,
  onLoad,
}) => {
  const [active, setActive] = useState<number>(0);
  const [slide, setSlide] = useState<number>(0);
  const [animation, setAnimation] = useState<Animation>(false);

  const { slides } = data;
  const tabs = useMemo(() => slides.map((slide) => slide.title), [data]);
  const allImages = useMemo(
    () =>
      slides
        .reduce<string[]>(
          (prev, { images, features }) => [
            ...prev,
            ...images,
            ...features.map(({ image }) => image || ""),
          ],
          []
        )
        .filter((image) => image),
    [data]
  );

  const handleTabsChange = useCallback(
    (index) => {
      if (index !== active) {
        setActive(index);
      }
    },
    [active]
  );

  const tryAnimation = () => {
    if (active !== slide) {
      setAnimation({
        prev: slide,
        next: active,
      });
    }
  };

  useEffect(() => {
    if (!animation) {
      tryAnimation();
    }
  }, [active]);

  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        setSlide(animation.next);
        setAnimation(false);
      }, DURATION);
    }
  }, [animation]);

  useEffect(() => {
    tryAnimation();
  }, [slide]);

  const getImagesSrc = (slide, index) => slides[slide].images[index];

  const getImagesCur = (index) => slides[slide].images[index];

  const getImagesAnimation = (index): false | ImagesAnimation =>
    animation && {
      prev: getImagesSrc(animation.prev, index),
      next: getImagesSrc(animation.next, index),
      dir: "prev",
    };

  return (
    <>
      <LoadImages srcs={allImages} onLoad={onLoad} />
      <div className="container container--default">
        <div className="border">
          <div className="series">
            <div className="series__place">
              <SubTitle>продукция</SubTitle>
            </div>
            <div className="series__place">
              <Tabs tabs={tabs} active={active} onChange={handleTabsChange} />
            </div>
            <div className="series__place">
              <Contents slides={slides} slide={slide} animation={animation} />
            </div>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="series__place">
                <div
                  className={classNames([
                    "series__photo",
                    { "series__photo--large": index === 0 },
                    { "series__photo--small": index !== 0 },
                  ])}
                >
                  <Images
                    cur={getImagesCur(index)}
                    animation={getImagesAnimation(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { Slider };
export { Animation };
