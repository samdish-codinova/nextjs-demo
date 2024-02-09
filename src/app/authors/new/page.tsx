import SaveIcon from "@mui/icons-material/Save";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Author",
  description: "Create an author by providing name and avatar url",
};

const NewAuthorPage = () => {
  return (
    <>
      <Typography variant="h4" component="h1" mb={3}>
        Add a New Author
      </Typography>
      <form className={styles.form}>
        <TextField label="Full Name" variant="outlined" />
        <TextField label="Avatar URL" variant="outlined" />
        <Box>
          <Button variant="contained" color="warning" startIcon={<SaveIcon />}>
            Save
          </Button>
        </Box>
      </form>
    </>
  );
};

export default NewAuthorPage;
