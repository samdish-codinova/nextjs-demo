import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "next/link";
import AuthorCardSkeleton from "./AuthorCardSkeleton";

const AuthorsLoading = async () => {
  return (
    <div>
      <Button
        LinkComponent={Link}
        href="/authors/new"
        variant="contained"
        color="warning"
        startIcon={<AddIcon />}
      >
        New Author
      </Button>

      <Grid container spacing={2} mt={4} mb={15}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
          <Grid item key={n} xs={12} sm={4} lg={3}>
            <AuthorCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AuthorsLoading;
