import { ContainerProps } from "./Container.types";
import styles from "./container.module.css";

const Container: React.FC<ContainerProps> = ({children, className, ...rest}) => {
  return (
    <section className={`${className} ${styles.background}`} {...rest}>
      {children}
    </section>
  )
}

export default Container;
