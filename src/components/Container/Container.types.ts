import { ReactNode } from "react";

export interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}