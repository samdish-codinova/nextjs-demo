import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const loading = () => {
  return (
    <Box component={Paper} elevation={3} p={3}>
      <Typography variant="h4" component="h1">
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "3rem" }} />
      </Typography>
      <Box
        component={CardHeader}
        px={0}
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1rem", maxWidth: "8rem" }}
          />
        }
        subheader={
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1rem", maxWidth: "12rem" }}
          />
        }
      />
      <Typography>
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
      </Typography>

      <Box display="flex">
        <Button disabled>
          <Skeleton animation="wave" width={100} height={50} variant="text" />
        </Button>
        <Button disabled>
          <Skeleton animation="wave" width={100} height={50} variant="text" />
        </Button>
      </Box>
    </Box>
  );
};

export default loading;
