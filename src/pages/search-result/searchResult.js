import { Redirect, useHistory } from "react-router-dom";
import { setNextPage } from "../../store/slices/booksSlice";
import "./styles.scss";
import { useSelector } from "react-redux";
import {
  selectFoundBooks,
  selectFoundTotalBooks,
  selectIsLoading,
} from "../../store/selectors";
import useAppDispatch from "../../hooks/useAppDispatch";
import Routes from "../../constants/routes";
import { fetchBooks } from "../../store/actions/books";
import { BookCardList, ControlContainer } from "../../components";
import { InfoLine } from "../../components/shared";

export default function SearchResult() {
  const foundBooksCount = useSelector(selectFoundTotalBooks);
  const foundBooks = useSelector(selectFoundBooks);
  const isLoading = useSelector(selectIsLoading);
  const { currentPage, maxResults } = useSelector((state) => state.books);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const showControlContainer =
    foundBooksCount !== null && !(currentPage + maxResults >= foundBooksCount);

  if (foundBooksCount === null && !isLoading) {
    return <Redirect to="/" />;
  }

  const clickOnLoadMoreHandler = () => {
    dispatch(setNextPage());
    dispatch(fetchBooks());
  };

  const clickOnBookCardHandler = (bookId) => {
    history.push(Routes.book + "/" + bookId);
  };

  return (
    <>
      <main className="main">
        <div className="main-container">
          {foundBooksCount !== null && (
            <InfoLine infoText={`Found ${foundBooksCount} results`} />
          )}
          {(foundBooksCount || isLoading) && (
            <BookCardList
              books={foundBooks}
              isLoading={isLoading && foundBooks.length === 0}
              mt={1}
              bookCardClickHandler={clickOnBookCardHandler}
            />
          )}
          {showControlContainer && (
            <ControlContainer
              onClick={clickOnLoadMoreHandler}
              isLoading={isLoading}
              mt={3}
            />
          )}
        </div>
      </main>
    </>
  );
}
