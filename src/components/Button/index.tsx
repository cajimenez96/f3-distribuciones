import Link from "next/link";
import { ButtonProps, Styles, buttonComponentProps, buttons } from "./Button.types";
import styles from './button.module.css';

const handleStyle = (type: Styles, disabled: boolean) => {
  if (disabled) return styles.disabled;

  return buttons[type]
}

const ButtonContent: React.FC<buttonComponentProps> = ({children}) => {
  return (
    <div className={`w-full h-10 px-4 py-1 flex justify-center items-center gap-2 font-lexend`}>
      {children}
    </div>
  )
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className,
  disabled = false,
  buttonStyle = "classic",
  type = "button",
  handleClick
}) => {

  return (
    <button
      className={`w-full rounded-xl py-1 shadow-xl ${className} ${handleStyle(buttonStyle, disabled)} duration-200`}
      onClick={handleClick}
      type={type}
    >
      {href ? (
        <Link href={href}>
          <ButtonContent>
            {children}
          </ButtonContent>
        </Link>
      ) : (
        <ButtonContent>
          {children}
        </ButtonContent>
      )}
    </button>
  );
}

export default Button;
