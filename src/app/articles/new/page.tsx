import Typography from "@mui/material/Typography";
import NewArticleForm from "./NewArticleForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Article",
  description: "Create a new article",
};

const NewAuthorPage = () => {
  return (
    <>
      <Typography variant="h4" component="h1" mb={3}>
        Create a New Article
      </Typography>

      <NewArticleForm />
    </>
  );
};

export default NewAuthorPage;
