import { useParams, Redirect } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import { selectFoundBooks } from "../../store/selectors";
import "./styles.scss";
import joinStringFromArray from "../../helpers/joinStringFromArray";
import {
  Container,
  DescriptionField,
  ImageElement,
  SecondaryInfo,
  Subtitle,
  UnderlineInfo,
} from "../../components/shared";

export default function BookPage() {
  const { bookId } = useParams();

  const books = useAppSelector(selectFoundBooks);
  if (books.length === 0) {
    return <Redirect to="/" />;
  }

  const book = books.find((book) => book.id === bookId);
  if (!book) {
    return <p>Something went wrong</p>;
  }

  const categories = joinStringFromArray(book.volumeInfo.categories, " / ");
  const authors = joinStringFromArray(book.volumeInfo.authors, ", ");

  return (
    <Container>
      <div className="book-page">
        <div className="book-page__image">
          <ImageElement
            imageSrc={book.volumeInfo.imageLinks.thumbnail}
            altText="image"
            size="l"
          />
        </div>
        <div className="book-page__info">
          <SecondaryInfo infoText={categories} />
          <Subtitle element="h2" titleText={book.volumeInfo.title} mt={3} />
          <UnderlineInfo infoText={authors} mt={2} />
          <DescriptionField mt={3} height={2}>
            {book.volumeInfo.description}
          </DescriptionField>
        </div>
      </div>
    </Container>
  );
}
