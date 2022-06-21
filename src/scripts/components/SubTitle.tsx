import React from "react";

export const SubTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <h2 className="sub-title">{children}</h2>;
