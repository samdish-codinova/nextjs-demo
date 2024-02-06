import Pagination from "./Pagination";
import Article from "./article";
import ArticleListContainer from "./articleListContainer";
import { Response } from "./types";

const query = `
  query ArticleList($offset: Int, $limit: Int) {
    articleList(limit: $limit, offset: $offset) {
      nodes {
        id
        title
        content
        createdAt
        author {
          id
          name
          createdAt
          avatar
        }
      }
      meta {
        limit
        offset
        total
      }
    }
  }`;

type ArticlePageProps = {
  searchParams: { page: string; pageSize: string };
};

const ArticlesPage = async ({ searchParams }: ArticlePageProps) => {
  const offset = Number(searchParams.page) || 1;
  const limit = Number(searchParams.pageSize) || 10;

  const response: Response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
      variables: {
        offset,
        limit,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return (
    <>
      <ArticleListContainer>
        {response.data.articleList.nodes.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </ArticleListContainer>

      <Pagination count={response.data.articleList.meta.total} />
    </>
  );
};

export default ArticlesPage;
