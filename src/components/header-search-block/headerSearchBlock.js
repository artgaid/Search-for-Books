import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { setSearchQuery, cleanup } from "../../store/slices/booksSlice";
import { SearchInput } from "../shared";
import "./styles.scss";
import useAppDispatch from "../../hooks/useAppDispatch";
import Routes from "../../constants/routes";
import {
  changeCategories,
  changeSortingBy,
} from "../../store/slices/searchOptionsSlice";
import { fetchBooks } from "../../store/actions/books";
import { SearchOptions } from "../index";

export default function HeaderSearchBlock() {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (location.pathname === Routes.index) {
      setInputValue("");
      dispatch(cleanup());
    }
  }, [location, dispatch]);

  const changeSearchValueHandler = (e) => {
    const target = e.target;
    const value = target.value;
    setInputValue(value);
  };

  const submitSearchQuery = () => {
    if (inputValue.trim()) {
      dispatch(setSearchQuery(inputValue));
      dispatch(fetchBooks());
      history.push(`${Routes.results}`);
    }
  };

  const pressEnterHandler = (e) => {
    if (e.key === "Enter") {
      submitSearchQuery();
    }
  };

  const changeSelectorHandler = (e, callback) => {
    const target = e.target;
    const value = target.children[target.selectedIndex].value;
    if (value !== null) {
      callback(value);
    }
  };

  const changeCategoriesHandler = (e) => {
    changeSelectorHandler(e, (value) => dispatch(changeCategories(value)));
  };

  const changeSortByHandler = (e) => {
    changeSelectorHandler(e, (value) => dispatch(changeSortingBy(value)));
  };

  return (
    <div
      className="header__header-search-block"
      data-testid="header-search-block"
    >
      <SearchInput
        inputValue={inputValue}
        onChange={changeSearchValueHandler}
        onSubmit={submitSearchQuery}
        onKeyDown={pressEnterHandler}
        placeholderText="Search book"
        maxTextLength={100}
      />
      <SearchOptions
        selectCategoriesHandler={changeCategoriesHandler}
        selectSortingByHandler={changeSortByHandler}
      />
    </div>
  );
}
