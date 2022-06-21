import React from "react";

import classNames from "classnames";

export const Tab: React.FC<{
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: any;
}> = ({ isActive, children, onClick }) => (
  <div className={classNames(["tab", { "tab--active": isActive }])}>
    <div className="tab__button" onClick={onClick}>
      <div className="tab__bgs">
        <div className="tab__bg tab__bg--default"></div>
        <div className="tab__bg tab__bg--yellow"></div>
      </div>
      <div className="tab__text">{children}</div>
    </div>
  </div>
);
