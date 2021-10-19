import "./styles.scss";
import clsx from "clsx";

export default function SecondaryInfo({ infoText = "", mt = 1 }) {
  const secondaryInfoClass = clsx(
    "secondary-info",
    mt && `secondary-info_margin-top-${mt}`
  );

  return <div className={secondaryInfoClass}>{infoText}</div>;
}
