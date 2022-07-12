import classNames from "classnames";
import React, { Fragment } from "react";
import { getClassesFromMods } from "../utils";

export type Move = false | "up-mid" | "mid-up" | "mid-down" | "down-mid";

export const Words: React.FC<{
  children: string;
  duration: number;
  mods?: string[];
  move: Move;
}> = ({ children, duration, mods, move }) => {
  const words = children.split(" ");

  return (
    <div
      className={classNames([
        "words",
        { [`words--${move}`]: move },
        getClassesFromMods("words", mods),
      ])}
      style={
        {
          "--duration": `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {words.map((word, index) => (
        <Fragment key={index}>
          <div className="words__mask">
            <div className="words__text">{word}</div>
          </div>{" "}
        </Fragment>
      ))}
    </div>
  );
};
