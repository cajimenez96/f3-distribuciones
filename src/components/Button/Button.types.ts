import { ReactNode } from "react";
import styles from './button.module.css';

export interface ButtonProps {
  href?: string;
  children: ReactNode;
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  buttonStyle?: Styles;
  type?: "submit" | "button";
}

export type buttonComponentProps = Pick<ButtonProps, "children">

export const buttons = {
  'classic': styles.classic,
} 

export type Styles = keyof typeof buttons;