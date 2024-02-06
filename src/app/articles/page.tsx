import React from "react";
import Article from "./article";
import ArticleListContainer from "./articleListContainer";

const ArticlesPage = () => {
  return (
    <ArticleListContainer>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </ArticleListContainer>
  );
};

export default ArticlesPage;
