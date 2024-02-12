"use client";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";
import { useState } from "react";
import toast from "react-hot-toast";

const DeleteArticleButton = ({ articleId }: { articleId: string }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      console.log("Deleting article with id ", articleId);

      toast.success("Article has been deleted");
    } catch (error) {
      return toast.error("Could not delete article please try again later!");
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
