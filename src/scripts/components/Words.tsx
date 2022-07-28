import classNames from "classnames";
import React, { Fragment } from "react";
import {
  getClassesFromMods,
  checkBrInString,
  getWordsWhiteSpace,
  getWordsBr,
} from "../utils";

export type Move = false | "up-mid" | "mid-up" | "mid-down" | "down-mid";

export const Words: React.FC<{
  children: string;
  duration: number;
  mods?: string[];
  move: Move;
}> = ({ children, duration, mods, move }) => {
  const title = children;
  const titleWithoutBreaks = title.replace(/\r?\n|\r/g, "");
  const words = getWordsWhiteSpace(titleWithoutBreaks);

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
      {words.map(
        (word, index) =>
          (checkBrInString(word) && (
            <Fragment key={index}>
              {getWordsBr(word).map((subWord, index, subWords) => (
                <Fragment key={index}>
                  <div className="words__mask">
                    <div className="words__text">{subWord}</div>
                  </div>
                  {(index < subWords.length - 1 && <br />) || " "}
                </Fragment>
              ))}
            </Fragment>
          )) || (
            <Fragment key={index}>
              <div className="words__mask">
                <div
                  className="words__text"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              </div>{" "}
            </Fragment>
          )
      )}
    </div>
  );
};
