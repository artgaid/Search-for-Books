import "./styles.scss";
import clsx from "clsx";

export default function DescriptionField({ children, mt = 3, height = 2 }) {
  const descriptionFieldClass = clsx(
    "description-field",
    mt && `description-field_margin-top-${mt}`,
    height && `description-field_height-${height}`
  );
  return (
    <div className={descriptionFieldClass}>{children || "No description"}</div>
  );
}
