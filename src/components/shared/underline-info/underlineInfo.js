import clsx from "clsx";
import "./styles.scss";

export default function UnderlineInfo({ infoText, mt = 1 | 2 | 3 }) {
  const underlineInfoClass = clsx(
    "underline-info",
    mt && `underline-info_margin-top-${mt}`
  );

  return <div className={underlineInfoClass}>{infoText}</div>;
}
