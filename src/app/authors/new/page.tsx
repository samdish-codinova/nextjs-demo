import Typography from "@mui/material/Typography";
import NewAuthorForm from "./NewAuthorForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Author",
  description: "Create a new author by proving name and avatar url",
};

const NewAuthorPage = () => {
  return (
    <>
      <Typography variant="h4" component="h1" mb={3}>
        Add a New Author
      </Typography>

      <NewAuthorForm />
    </>
  );
};

export default NewAuthorPage;
