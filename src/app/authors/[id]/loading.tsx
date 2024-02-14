import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AuthorDetailsLoading = () => {
  return (
    <Stack
      component={Paper}
      elevation={3}
      p={3}
      gap={2}
      maxWidth="500px"
      alignItems="center"
      mx="auto"
    >
      <Skeleton animation="wave" variant="circular" width={250} height={250} />
      <Typography textAlign="center" variant="h4" component="h1">
        <Skeleton
          animation="wave"
          variant="text"
          width={250}
          sx={{ fontSize: "3.5rem" }}
        />
      </Typography>
      <Typography textAlign="center" variant="body1">
        <Skeleton
          animation="wave"
          variant="text"
          width={150}
          sx={{ fontSize: "1rem" }}
        />
      </Typography>

      <Box display="flex" gap={1}>
        <Skeleton animation="wave" variant="rounded" width={90} height={35} />
        <Skeleton animation="wave" variant="rounded" width={90} height={35} />
      </Box>
    </Stack>
  );
};

export default AuthorDetailsLoading;
