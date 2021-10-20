import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Header, HeaderSearchBlock, HeaderTitle } from "./components";
import "./styles/styles.scss";
import SearchResult from "./pages/search-result/searchResult";
import InfoPage from "./pages/info/InfoPage";
import BookPage from "./pages/book/bookPage";

function App() {
  console.log(" render app");
  return (
    <>
      <Header>
        <Link className="inner-link" to="/">
          <HeaderTitle titleText="Search for books" />
        </Link>
        <HeaderSearchBlock />
      </Header>
      <Switch>
        <Route path="/" exact component={InfoPage} />
        <Route path="/results" component={SearchResult} />
        <Route path="/book/:bookId" component={BookPage} />
      </Switch>
    </>
  );
}

export default App;
