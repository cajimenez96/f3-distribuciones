import { ContainerProps } from "./Container.types";
import styles from "./container.module.css";

const Container: React.FC<ContainerProps> = ({children, className, ...rest}) => {
  return (
    <div className={`${className} ${styles.background}`} {...rest}>
      {children}
    </div>
  )
}

export default Container;
