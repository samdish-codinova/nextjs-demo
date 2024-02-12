"use client";
import { Author } from "@/app/articles/types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

type DeleteAuthorResponse = {
  data: {
    deleteAuthor: Author;
  } | null;
  errors?: Array<{ message: string; [x: string]: unknown }> | null;
};

const mutation = `#graphql
  mutation DeleteAuthor($id: String!) {
    deleteAuthor(id: $id) {
      id
      name
      createdAt
      avatar
    }
  }
`;

const DeleteAuthorButton = ({ authorId }: { authorId: string }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    setLoading(true);

    try {
      const res: DeleteAuthorResponse = await fetch(
        "http://localhost:5000/graphql",
        {
          method: "POST",
          body: JSON.stringify({
            query: mutation,
            variables: { id: authorId },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());

      if (res.errors)
        return toast.error("Could not delete author please try again later!");

      toast.success("Author has been deleted");
      router.replace("/authors");
    } catch (error) {
      return toast.error("Could not delete author please try again later!");
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
      Delete Author
    </Button>
  );
};

export default DeleteAuthorButton;
