import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import { Author, Meta } from "../articles/types";
import AuthorCard from "./AuthorCard";

const query = `
  query GetAuthorList($limit: Int, $offset: Int) {
    authorList(limit: $limit, offset: $offset) {
      meta {
        offset
        limit
        total
      }
      nodes {
        id
        name
        avatar
      }
    }
  }
`;

type AuthorsPageProps = {
  searchParams: {
    page: string;
    pageSize: string;
  };
};

type AuthorListResponse = {
  data: {
    authorList: {
      meta: Meta;
      nodes: Author[];
    };
  };
};

const AuthorsPage = async ({ searchParams }: AuthorsPageProps) => {
  const paramsPage = Number(searchParams.page);
  const paramsPageSize = Number(searchParams.pageSize);
  const defaultPage = 0;
  const defaultPageSize = 10;

  const offset = !paramsPage ? defaultPage : paramsPage;
  const limit =
    !paramsPageSize || paramsPageSize < 0 ? defaultPageSize : paramsPageSize;

  const authorList: AuthorListResponse = await fetch(
    "http://localhost:5000/graphql",
    {
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
    }
  ).then((res) => res.json());

  if (!authorList?.data?.authorList) throw new Error("Something went wrong");

  return (
    <div>
      <Button
        LinkComponent={Link}
        href="/authors/new"
        variant="contained"
        color="warning"
        startIcon={<AddIcon />}
      >
        New Author
      </Button>

      <Grid container spacing={2} mt={4}>
        {authorList?.data?.authorList?.nodes.map((author) => (
          <Grid item key={author.id} xs={12} sm={4} lg={3}>
            <AuthorCard
              id={author.id}
              name={author.name}
              avatar={author.avatar}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AuthorsPage;
