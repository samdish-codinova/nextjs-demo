"use client";

import {
  ArticleUpdate,
  ArticleUpdateSchema,
} from "@/app/_validationSchemas/article";
import { zodResolver } from "@hookform/resolvers/zod";
import SaveIcon from "@mui/icons-material/SaveAs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const mutation = `
  mutation UpdateArticle($id: String!, $title: String, $content: String) {
    updateArticle(id: $id, title: $title, content: $content) {
      message
      success
    }
  }
`;

type UpdateArticleResponse = {
  data?: {
    updateArticle: { success: boolean; message: string };
  } | null;
  errors?: [{ message: string; [x: string]: unknown }];
};

type UpdateArticleFormProps = {
  article: {
    id: string;
    title: string;
    content: string;
  };
};

const UpdateArticleForm = ({ article }: UpdateArticleFormProps) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<ArticleUpdate>({
    resolver: zodResolver(ArticleUpdateSchema),
    defaultValues: {
      id: article.id,
      content: article.content,
      title: article.title,
    },
  });

  const submitHandler = async (articleData: ArticleUpdate) => {
    try {
      setLoading(true);
      const createArticleResponse: UpdateArticleResponse = await fetch(
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

      const isUpdated = createArticleResponse.data?.updateArticle?.success;
      if (!isUpdated)
        return toast.error("Could not create article. Try again later.");

      reset();
      toast.success("Article updated successfully");
      router.push(`/articles/${article.id}`);
      router.refresh();
    } catch (error) {
      toast.error("Could not create article. Try again later.");
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
            {loading ? "Updating..." : "Update"}
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default UpdateArticleForm;
