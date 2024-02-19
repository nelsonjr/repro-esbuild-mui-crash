import React from "react";

// WORKS: import { Button } from "./button";
import { Button } from "./button";
// CRASHES: import { Button } from "@mui/material";
// import { Button } from "@mui/material";

interface ButtonProps {
  message: string;
  onClick: VoidFunction;
}

export const MyButton: React.FC<ButtonProps> = ({ message, onClick }) => (
  <Button onClick={onClick}>{message}</Button>
);
