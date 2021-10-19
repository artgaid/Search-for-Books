import clsx from "clsx";
import "./styles.scss";

export default function Loader({ color = "gray", size = "s" }) {
  const LoaderClass = clsx(
    "loader",
    `loader_color-${color}`,
    `loader_size-${size}`
  );

  return (
    <div className={LoaderClass}>
      <div className="loader__arc"></div>
      <div className="loader__arc"></div>
      <div className="loader__arc"></div>
    </div>
  );
}
