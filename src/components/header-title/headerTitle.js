import "./styles.scss";

export default function HeaderTitle({ titleText = "" }) {
  return <h1 className="header__title-header">{titleText}</h1>;
}
