"use client";

import { AuthorInputSchema } from "@/app/_validationSchemas/author";
import { Author } from "@/app/articles/types";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const mutation = `
  mutation UpdateAuthor($id: String!, $name: String, $avatar: String) {
    updateAuthor(id: $id, name: $name, avatar: $avatar) {
      message
      success
    }
  }
`;

type UpdateAuthorResponse = {
  data?: {
    updateAuthor: { success: boolean; message: string };
  } | null;
  errors?: [{ message: string; [x: string]: unknown }];
};

type UpdateAuthorFormProps = {
  author: Author;
};

const UpdateAuthorForm = ({ author }: UpdateAuthorFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthorInputSchema>({
    resolver: zodResolver(AuthorInputSchema),
    defaultValues: author,
  });

  const submitHandler = async (authorData: AuthorInputSchema) => {
    try {
      setLoading(true);
      const updateAuthorResponse: UpdateAuthorResponse = await fetch(
        "http://localhost:5000/graphql",
        {
          method: "POST",
          body: JSON.stringify({
            query: mutation,
            variables: { ...authorData, id: author.id },
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());

      const isUpdated = updateAuthorResponse?.data?.updateAuthor?.success;
      if (!isUpdated)
        return toast.error("Could not update author. Try again later.");

      toast.success("Author updated successfully");
      router.push(`/authors/${author.id}`);
      router.refresh();
    } catch (error) {
      toast.error("Could not create author. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Stack
        gap={2}
        maxWidth="600px"
        component="form"
        onSubmit={handleSubmit(submitHandler)}
      >
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
            disabled={loading}
            variant="contained"
            color="warning"
            startIcon={<SaveIcon />}
          >
            {loading ? "Updating..." : "Update"}
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default UpdateAuthorForm;
