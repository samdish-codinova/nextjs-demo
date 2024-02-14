import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AuthorUpdateLoading = () => {
  return (
    <>
      <Typography variant="h4" component="h1" mb={3}>
        Update Author
      </Typography>

      <Stack gap={2} maxWidth="600px">
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ height: "3rem" }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          sx={{ height: "3rem" }}
        />
        <div>
          <Skeleton animation="wave" variant="rounded" width={110} height={35} />
        </div>
      </Stack>
    </>
  );
};

export default AuthorUpdateLoading;
