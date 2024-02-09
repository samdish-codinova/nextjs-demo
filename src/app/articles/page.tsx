import Pagination from "../components/Pagination";
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
  const paramsPage = Number(searchParams.page);
  const paramsPageSize = Number(searchParams.pageSize);
  const defaultPage = 1;
  const defaultPageSize = 10;

  const offset = !paramsPage || paramsPage <= 0 ? defaultPage : paramsPage;
  const limit =
    !paramsPageSize || paramsPageSize <= 0 ? defaultPageSize : paramsPageSize;

  const response: Response = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
      variables: {
        offset: offset - 1,
        limit,
      },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (!response.data?.articleList) throw new Error("Something went wrong");

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
