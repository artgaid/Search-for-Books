import "./styles.scss";

export default function Header({ children }) {
  console.log(children, "cld");
  return (
    <header className="header">
      {children.map((children, idx) => (
        <div key={idx} className="header__container">
          {children}
        </div>
      ))}
    </header>
  );
}
