import { HeadingProps } from "./Heading.types";

const Heading = ({children, className, level = 1, ...rest}: HeadingProps
 ) => {

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={`text-negro ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

export default Heading;
