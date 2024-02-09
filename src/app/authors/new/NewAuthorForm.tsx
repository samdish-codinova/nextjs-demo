"use client";

import { AuthorInputSchema } from "@/app/_validationSchemas/author";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import toast from "react-hot-toast";

const mutation = `
  mutation CreateAuthor($name: String!, $avatar: String!) {
    createAuthor(name: $name, avatar: $avatar) {
      avatar
      createdAt
      id
      name
    }
  }
`;

const NewAuthorForm = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<AuthorInputSchema>({
    resolver: zodResolver(AuthorInputSchema),
  });

  const submitHandler = async (authorData: AuthorInputSchema) => {
    try {
      await fetch("http://localhost:5000/graphql", {
        method: "POST",
        body: JSON.stringify({
          query: mutation,
          variables: authorData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      reset();
      toast.success("Author created successfully");
    } catch (error) {
      toast.error("Could not create author. Try again later.");
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <TextField
          {...register("name")}
          label="Full Name"
          variant="outlined"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
        />
        <TextField
          {...register("avatar")}
          label="Avatar URL"
          variant="outlined"
          error={!!errors.avatar?.message}
          helperText={errors.avatar?.message}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="warning"
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default NewAuthorForm;
