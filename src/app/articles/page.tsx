import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import Pagination from "../components/Pagination";
import ArticleCard from "./ArticleCard";
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
    cache: "no-store",
  }).then((res) => res.json());

  if (!response.data?.articleList) throw new Error("Something went wrong");

  return (
    <>
      <Button
        LinkComponent={Link}
        href="/articles/new"
        variant="contained"
        color="warning"
        startIcon={<AddIcon />}
      >
        New Article
      </Button>

      <Grid container spacing={2} mt={4} mb={15}>
        {response.data.articleList.nodes.map((article) => (
          <Grid item key={article.id} xs={12} sm={6}>
            <ArticleCard key={article.id} {...article} />
          </Grid>
        ))}
      </Grid>

      <Pagination count={response.data.articleList.meta.total} />
    </>
  );
};

export default ArticlesPage;
