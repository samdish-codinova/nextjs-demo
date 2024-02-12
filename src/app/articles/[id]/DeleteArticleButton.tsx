"use client";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const mutation = `
  mutation DeleteArticle($id: String!) {
  deleteArticle(id: $id) {
    id
  }
}
`;

type DeleteArticleResponse = {
  data?: {
    deleteArticle: { id: string };
  } | null;
  errors?: [{ message: string; [x: string]: unknown }];
};

const DeleteArticleButton = ({ articleId }: { articleId: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);

    try {
      console.log("Deleting article with id ", articleId);

      const deleteResponse: DeleteArticleResponse = await fetch(
        "http://localhost:5000/graphql",
        {
          method: "POST",
          body: JSON.stringify({
            query: mutation,
            variables: { id: articleId },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      ).then((res) => res.json());

      const errors = deleteResponse?.errors;
      const deletedArticleId = deleteResponse?.data?.deleteArticle?.id;

      if (deletedArticleId) {
        toast.success("Article has been deleted");
        router.replace("/articles");
      } else if (errors) {
        toast.error(
          errors?.[0]?.message ||
            "Could not delete article. Please try again later"
        );
      }
    } catch (error) {
      return toast.error(
        error?.toString() || "Could not delete article please try again later!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleDelete}
      variant="contained"
      color="error"
      startIcon={<DeleteForeverIcon />}
    >
      {loading ? "Deleting..." : "Delete Article"}
    </Button>
  );
};

export default DeleteArticleButton;
