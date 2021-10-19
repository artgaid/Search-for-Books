import clsx from "clsx";
import "./styles.scss";

const Button = (onClick, buttonText, ml, disabled = false) => {
  const buttonClass = clsx(
    "button",
    ml && `button_margin-left-${ml}`,
    disabled && "button_disabled"
  );

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default Button;
