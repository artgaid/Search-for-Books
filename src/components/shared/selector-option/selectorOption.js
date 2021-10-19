import "./styles.scss";

export default function SelectorOption({ value, title }) {
  return (
    <option className="selector-option" value={value}>
      {title}
    </option>
  );
}
