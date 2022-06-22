import React from "react";

export const MaskText: React.FC<{ children: string; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={className}>
      {children.split(" ").map((word) => (
        <div>{word}</div>
      ))}
    </div>
  );
};
