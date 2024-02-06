import React from "react";
import Article from "./article";
import ArticleListContainer from "./articleListContainer";
import Pagination from "./Pagination";

const ArticlesPage = () => {
  return (
    <>
      <ArticleListContainer>
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </ArticleListContainer>

      <Pagination count={10} />
    </>
  );
};

export default ArticlesPage;
