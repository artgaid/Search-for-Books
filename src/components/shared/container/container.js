import "./styles.scss";

export default function Container(ContainerProps) {
  return <div className="container">{ContainerProps.children}</div>;
}
