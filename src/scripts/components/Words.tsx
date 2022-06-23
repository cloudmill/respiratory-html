import classNames from "classnames";
import React, { Fragment } from "react";

export const Words: React.FC<{
  children: string;
  duration: number;
  move: false | "up" | "down";
}> = ({ children, duration, move }) => {
  const words = children.split(" ");

  return (
    <div
      className={classNames(["words", { [`words--${move}`]: move }])}
      style={
        {
          "--duration": `${Math.floor(duration)}ms`,
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
