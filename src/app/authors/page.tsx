import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const AuthorsPage = () => {
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
      <Typography mt={3}>Authors List</Typography>
    </div>
  );
};

export default AuthorsPage;
