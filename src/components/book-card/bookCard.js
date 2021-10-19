import "./styles.scss";
import limitStringLength from "../../helpers/limitStringLength";
import {
  ImageElement,
  SecondaryInfo,
  Subtitle,
  UnderlineInfo,
} from "../shared";

export default function BookCard({
  imageSrc,
  title = "No name",
  category = "",
  authors = "No author",
  onClick,
}) {
  return (
    <div className="book-card" onClick={onClick}>
      <ImageElement imageSrc={imageSrc} altText={title} />
      <UnderlineInfo infoText={category} mt={3} />
      <Subtitle titleText={limitStringLength(title, 50)} mt={2} />
      <SecondaryInfo infoText={limitStringLength(authors, 50)} />
    </div>
  );
}
