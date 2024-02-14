import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

const ArticleCardSkeleton = () => {
  return (
    <Paper elevation={3}>
      <Card>
        <Typography variant="h5" sx={{ px: 2, pt: 2 }}>
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "2rem" }} />
        </Typography>
        <CardHeader
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
        <CardContent>
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
        </CardContent>
      </Card>
    </Paper>
  );
};

export default ArticleCardSkeleton;
