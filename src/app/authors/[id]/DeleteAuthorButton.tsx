"use client";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Button from "@mui/material/Button";

const DeleteAuthorButton = () => {
  return (
    <Button variant="contained" color="error" startIcon={<DeleteForeverIcon />}>
      Delete Author
    </Button>
  );
};

export default DeleteAuthorButton;
