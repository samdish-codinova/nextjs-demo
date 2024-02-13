import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Author } from "../types";
import DeleteArticleButton from "./DeleteArticleButton";

type ArticleDetailsPageProps = {
  params: { id: string };
};

const query = `
  query GetArticle($id: String!) {
    getArticle(id: $id) {
      id
      title
      content
      createdAt
      author {
        avatar
        createdAt
        id
        name
      }
    }
  }
`;

type GetArticleResponse = {
  data?: {
    getArticle: {
      id: string;
      title: string;
      content: string;
      createdAt: Date;
      author: Author;
    } | null;
  } | null;
  errors?: [{ message: string; [x: string]: unknown }];
};

const ArticleDetailsPage = async ({ params }: ArticleDetailsPageProps) => {
  const res: GetArticleResponse = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
      variables: { id: params.id },
    }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  }).then((res) => res.json());

  const article = res.data?.getArticle;

  if (!article) return notFound();

  return (
    <Box component={Paper} elevation={3} p={3}>
      <Typography variant="h4" component="h1">
        {article.title}
      </Typography>
      <Box
        component={CardHeader}
        px={0}
        avatar={<Avatar src={article.author.avatar} aria-label="author" />}
        title={article.author.name}
        subheader={`Published ${new Date(article.createdAt).toLocaleString()}`}
      />
      <Typography mb={2}>{article.content}</Typography>

      <Box display="flex" gap={1}>
        <DeleteArticleButton articleId={article.id} />
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          component={Link}
          href={`/articles/${article.id}/update`}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default ArticleDetailsPage;
