import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ReactNode } from "react";

const RootProvider = ({ children }: { children: ReactNode }) => {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
};

export default RootProvider;
