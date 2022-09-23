import { ReactNode } from "react";

export interface MyTextProps {
  children?: ReactNode; // Ctrl + left click to know accepted types
}

export function MyText({ children }: MyTextProps) {
  return <div>{children}</div>;
}
