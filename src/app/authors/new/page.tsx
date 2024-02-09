"use client";

import { AuthorInputSchema } from "@/app/_validationSchemas/author";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const NewAuthorPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthorInputSchema>({
    resolver: zodResolver(AuthorInputSchema),
  });

  const submitHandler = (data: AuthorInputSchema) => {
    console.log("Submitting...", data);
  };

  return (
    <>
      <Typography variant="h4" component="h1" mb={3}>
        Add a New Author
      </Typography>
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

export default NewAuthorPage;
