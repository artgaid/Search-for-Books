import clsx from "clsx";
import "./styles.scss";

export default function Subtitle({ titleText, element = "h3", mt = 2 | 3 }) {
  const subtitleClass = clsx(
    `subtitle`,
    `subtitle_${element}`,
    mt && `subtitle_margin-top-${mt}`
  );

  const templates = {
    h3: (text) => <h3 className={subtitleClass}>{text}</h3>,
    h2: (text) => <h2 className={subtitleClass}>{text}</h2>,
  };

  return templates[element](titleText);
}
