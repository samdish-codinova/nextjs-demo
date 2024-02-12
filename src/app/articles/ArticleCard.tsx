import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Node } from "./types";
import Link from "next/link";

const ArticleCard = (props: Node) => {
  return (
    <div>
      <Card component={Link} href={`/articles/${props.id}`}>
        <Typography variant="h5" sx={{ px: 2, pt: 2 }}>
          {props.title}
        </Typography>
        <CardHeader
          avatar={<Avatar src={props.author.avatar} aria-label="author" />}
          title={props.author.name}
          subheader={new Date(props.createdAt).toLocaleString()}
        />
        <CardContent>{props.content}</CardContent>
      </Card>
    </div>
  );
};

export default ArticleCard;
