import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Author } from "../../articles/types";
import DeleteAuthorButton from "./DeleteAuthorButton";

type AuthorDetailsPageProps = {
  params: {
    id: string;
  };
};

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

export type AuthorDetailsResponse = {
  data: {
    getAuthor: Author;
  };
};

const AuthorDetailsPage = async ({ params }: AuthorDetailsPageProps) => {
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
    <Stack
      component={Paper}
      elevation={3}
      p={3}
      gap={2}
      maxWidth="500px"
      alignItems="center"
      mx="auto"
    >
      <Avatar
        sx={{ width: "250px", height: "250px", aspectRatio: 1 }}
        src={author.avatar}
        alt={author.name}
      />
      <Typography textAlign="center" variant="h4" component="h1">
        {author.name}
      </Typography>
      <Typography textAlign="center" variant="body1">
        {new Date(author.createdAt).toLocaleString()}
      </Typography>

      <Box display="flex" gap={1}>
        <DeleteAuthorButton authorId={author.id} />
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          component={Link}
          href={`/authors/${author.id}/update`}
        >
          Edit
        </Button>
      </Box>
    </Stack>
  );
};

export default AuthorDetailsPage;
