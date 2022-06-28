import classNames from "classnames";
import React from "react";

export type Move = false | "in" | "out";

export const FadeContainer: React.FC<{
  children: React.ReactNode;
  duration: number;
  move: Move;
  className?: string | undefined;
}> = ({ children, duration, move, className }) => {
  return (
    <div
      className={classNames([
        "fade-container",
        { [`fade-container--${move}`]: move },
        className,
      ])}
      style={
        {
          "--duration": `${duration}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};
