import React, { Children, ReactNode } from "react";
import Box from "@mui/material/Box";

const ArticleListContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        marginBottom: "6rem",
        display: "grid",
        gap: "1rem",
        padding: "1rem",
        "@media (min-width: 768px)": {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ArticleListContainer;
