import VisibilityIcon from "@mui/icons-material/Visibility";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Author } from "../articles/types";
import Link from "next/link";

type AuthorCardProps = Omit<Author, "createdAt">;

const AuthorCard = ({ id, name, avatar }: AuthorCardProps) => {
  return (
    <Box>
      <Stack p={2} component={Paper} elevation={3} gap={2} alignItems="center">
        <Avatar
          sx={{ width: "70px", height: "70px", aspectRatio: 1 }}
          src={avatar}
          alt={name}
        />
        <Typography>{name}</Typography>
        <div>
          <Button
            variant="outlined"
            color="success"
            startIcon={<VisibilityIcon />}
            component={Link}
            href={`/authors/${id}`}
          >
            View
          </Button>
        </div>
      </Stack>
    </Box>
  );
};

export default AuthorCard;
