import Typography from "@mui/material/Typography";
import { notFound } from "next/navigation";
import { AuthorDetailsResponse } from "../page";
import UpdateAuthorForm from "./UpdateAuthorForm";

const query = `
  query GetAuthor($id: String!) {
    getAuthor(id: $id) {
      id
      name
      createdAt
      avatar
    }
  }
`;

const UpdateAuthorPage = async ({ params }: { params: { id: string } }) => {
  const response: AuthorDetailsResponse = await fetch(
    "http://localhost:5000/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query,
        variables: { id: params.id },
      }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  ).then((res) => res.json());

  const author = response?.data?.getAuthor;

  if (!author) return notFound();

  return (
    <>
      <Typography variant="h4" component="h1" mb={3}>
        Update Author
      </Typography>

      <UpdateAuthorForm author={author} />
    </>
  );
};

export default UpdateAuthorPage;
