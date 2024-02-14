import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import ArticleCardSkeleton from "./ArticleCardSkeleton";

const ArticlesLoading = () => {
  return (
    <>
      <Button
        LinkComponent={Link}
        href="/articles/new"
        variant="contained"
        color="warning"
        startIcon={<AddIcon />}
      >
        New Article
      </Button>

      <Grid container spacing={2} mt={4} mb={15}>
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <Grid item key={n} xs={12} sm={6}>
            <ArticleCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ArticlesLoading;
