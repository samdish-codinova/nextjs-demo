import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const loading = () => {
  return (
    <>
      <Typography variant="h4" component="h1" mb={3}>
        Edit Article
      </Typography>

      <>
        <Stack gap={2} maxWidth="600px">
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ height: "3rem" }}
          />
          <Skeleton
            animation="wave"
            variant="rectangular"
            sx={{ height: "10rem" }}
          />
          <Box>
            <Button disabled>
              <Skeleton
                animation="wave"
                width={100}
                height={50}
                variant="text"
              />
            </Button>
          </Box>
        </Stack>
      </>
    </>
  );
};

export default loading;
