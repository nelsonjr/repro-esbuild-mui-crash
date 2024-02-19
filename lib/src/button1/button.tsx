import React, { ReactNode } from "react";

export const Button: React.FC<{
  children: ReactNode;
  onClick: VoidFunction;
}> = ({ children, onClick }) => <button onClick={onClick}>{children}</button>;
