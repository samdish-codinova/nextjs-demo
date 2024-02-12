import Typography from "@mui/material/Typography";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import UpdateArticleForm from "./UpdateArticleForm";

export const metadata: Metadata = {
  title: "Edit Article",
  description: "Edit article",
};

type UpdateArticlePageProps = {
  params: { id: string };
};

const query = `
  query GetArticle($id: String!) {
  getArticle(id: $id) {
    id
    title
    content
  }
}
`;

type GetArticleResponse = {
  data?: {
    getArticle: {
      id: string;
      title: string;
      content: string;
    } | null;
  } | null;
  errors?: [{ message: string; [x: string]: unknown }];
};

const UpdateArticlePage = async ({ params }: UpdateArticlePageProps) => {
  const res: GetArticleResponse = await fetch("http://localhost:5000/graphql", {
    method: "POST",
    body: JSON.stringify({
      query,
      variables: { id: params.id },
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  const article = res.data?.getArticle;

  if (!article) return notFound();

  return (
    <>
      <Typography variant="h4" component="h1" mb={3}>
        Edit Article
      </Typography>

      <UpdateArticleForm article={article} />
    </>
  );
};

export default UpdateArticlePage;
