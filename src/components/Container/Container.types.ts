import { ReactNode } from "react";

export interface ContainerProps extends React.HTMLProps<HTMLElement> {
  children: ReactNode;
  className?: string;
}