import Box from "@mui/material/Box";
import React, { ReactNode } from "react";

const ArticlesLayout = ({ children }: { children: ReactNode }) => {
  return <Box p={3}>{children}</Box>;
};

export default ArticlesLayout;
