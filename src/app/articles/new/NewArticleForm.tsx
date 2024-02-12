"use client";

import {
  ArticleInput,
  ArticleInputSchema,
} from "@/app/_validationSchemas/article";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAllAuthors from "./useAllAuthors";

const mutation = `
  mutation CreateArticle($title: String!, $content: String!, $authorId: String!) {
    createArticle(title: $title, content: $content, authorId: $authorId) {
      id
    }
  }
`;

type CreateArticleResponse = {
  data?: {
    createArticle: { id: string };
  } | null;
  errors?: [{ message: string; [x: string]: unknown }];
};

const NewArticleForm = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ArticleInput>({
    resolver: zodResolver(ArticleInputSchema),
  });

  const submitHandler = async (articleData: ArticleInput) => {
    try {
      setLoading(true);
      const createArticleResponse: CreateArticleResponse = await fetch(
        "http://localhost:5000/graphql",
        {
          method: "POST",
          body: JSON.stringify({
            query: mutation,
            variables: articleData,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => res.json());

      const articleId = createArticleResponse.data?.createArticle?.id;
      if (!articleId)
        return toast.error("Could not create article. Try again later.");

      reset();
      toast.success("Article created successfully");
      router.push(`/articles/${articleId}`);
    } catch (error) {
      toast.error("Could not create article. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const { data: authors, loading: authorsLoading } = useAllAuthors();

  return (
    <>
      <Stack
        gap={2}
        maxWidth="600px"
        component="form"
        onSubmit={handleSubmit(submitHandler)}
      >
        <TextField
          select
          label="Author"
          defaultValue=""
          disabled={authorsLoading}
          {...register("authorId")}
          error={!!errors.authorId?.message}
          helperText={errors.authorId?.message}
        >
          {(authors ?? []).map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          {...register("title")}
          label="Title"
          variant="outlined"
          error={!!errors.title?.message}
          helperText={errors.title?.message}
        />
        <TextField
          {...register("content")}
          label="Content"
          multiline
          rows={6}
          variant="outlined"
          error={!!errors.content?.message}
          helperText={errors.content?.message}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="warning"
            startIcon={<SaveIcon />}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default NewArticleForm;
