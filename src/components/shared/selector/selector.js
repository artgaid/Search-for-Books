import "./styles.scss";

export default function Selector({
  title = "",
  onChange,
  children,
  defaultValue,
}) {
  return (
    <label className="selector">
      <span className="selector__title">{title}</span>
      <select
        className="selector__select"
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </label>
  );
}
