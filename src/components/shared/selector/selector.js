import "./styles.scss";

export default function Selector({
  title = "",
  onChange,
  children,
  defaultValue,
}) {
  console.log(children, "cld 2");
  return (
    <label className="selector">
      <span className="selector__title">{title}</span>
      {children.map((children, idx) => (
        <select
          key={idx}
          className="selector__select"
          onChange={onChange}
          defaultValue={defaultValue}
        >
          {children}
        </select>
      ))}
    </label>
  );
}
