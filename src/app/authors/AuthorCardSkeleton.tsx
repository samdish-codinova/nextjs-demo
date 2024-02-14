import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AuthorCardSkeleton = () => {
  return (
    <Box>
      <Stack p={2} component={Paper} elevation={3} gap={2} alignItems="center">
        <Skeleton animation="wave" variant="circular" width={70} height={70} />
        <Typography>
          <Skeleton animation="wave" variant="text" width={110} />
        </Typography>
        <Box>
          <Skeleton animation="wave" variant="rounded" width={90} height={35} />
        </Box>
      </Stack>
    </Box>
  );
};

export default AuthorCardSkeleton;
