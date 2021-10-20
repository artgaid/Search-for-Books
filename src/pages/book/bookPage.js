import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFoundBooks } from "../../store/selectors";
import "./styles.scss";
import joinStringFromArray from "../../helpers/joinStringFromArray";
import {
  Container,
  ImageElement,
  SecondaryInfo,
  Subtitle,
  UnderlineInfo,
} from "../../components/shared";
import clsx from "clsx";

export default function BookPage() {
  const { bookId } = useParams();

  const books = useSelector(selectFoundBooks);
  if (books.length === 0) {
    return <Redirect to="/" />;
  }

  const book = books.find((book) => book.id === bookId);
  if (!book) {
    return <p>Something went wrong</p>;
  }

  const categories = joinStringFromArray(book.volumeInfo.categories, " / ");
  const authors = joinStringFromArray(book.volumeInfo.authors, ", ");

  const descriptionFieldClass = clsx(
    "description-field",
    "description-field_margin-top-3",
    "description-field_height-2"
  );

  return (
    <Container>
      <div className="book-page">
        <div className="book-page__image">
          <ImageElement
            imageSrc={book.volumeInfo.imageLinks.smallThumbnail}
            altText="image"
            size="l"
          />
        </div>
        <div className="book-page__info">
          <SecondaryInfo infoText={categories} />
          <Subtitle element="h2" titleText={book.volumeInfo.title} mt={3} />
          <UnderlineInfo infoText={authors} mt={2} />
          <div className={descriptionFieldClass}>
            {book.volumeInfo.description}
          </div>
        </div>
      </div>
    </Container>
  );
}
