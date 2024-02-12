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
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewArticleForm = () => {
  const authors = [
    {
      id: "0c341dcb-e351-479a-abab-84c12ed880e1",
      name: "Sam",
    },
    {
      id: "15cd5a5f-cc9e-495e-a34c-e8f335b8c3d2",
      name: "Dr. Pim Hanks",
    },
    {
      id: "1b3e42a6-a55b-4c81-a7ee-f869221aad01",
      name: "Jan Corwin",
    },
  ];

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ArticleInput>({
    resolver: zodResolver(ArticleInputSchema),
  });

  const submitHandler = async (articleData: ArticleInput) => {
    try {
      console.log("Creating article", articleData);
      toast.success("Article created successfully");
    } catch (error) {
      toast.error("Could not create article. Try again later.");
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
          select
          label="Author"
          defaultValue=""
          {...register("authorId")}
          error={!!errors.authorId?.message}
          helperText={errors.authorId?.message}
        >
          {authors.map((option) => (
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
            Save
          </Button>
        </Box>
      </Stack>
    </>
  );
};

export default NewArticleForm;
