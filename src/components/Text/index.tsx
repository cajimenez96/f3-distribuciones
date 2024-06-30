import React from "react";
import { TextProps } from "./Text.types";

const Text = ({children, className, ...rest}: TextProps) => {
  return (
    <p className={`text-base font-normal text-negro ${className}`} {...rest}>
      {children}
    </p>
  )
};

export default Text;
