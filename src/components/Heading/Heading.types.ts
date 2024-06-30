import { ReactNode } from "react";

interface CustomProps{
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & CustomProps