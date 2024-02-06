"use client";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import PaginationMui from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

type PaginationProps = {
  count: number;
};

const Pagination = ({ count }: PaginationProps) => {
  const router = useRouter();
  const allowedLimits = [10, 25, 50, 100];
  const searchParams = useSearchParams();

  const handlePageChange = (_: ChangeEvent<unknown>, page: number) => {
    const pageSize = !searchParams.get("pageSize")
      ? allowedLimits[0]
      : searchParams.get("pageSize");
    router.push(`articles?page=${page}&pageSize=${pageSize}`);
  };

  const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const pageSize = Number(e.target.value) || allowedLimits[0];
    const page = searchParams.get("page");

    router.push(`articles?page=${page}&pageSize=${pageSize}`);
  };

  return (
    <>
      <PaginationContainer>
        <Button
          onClick={() => {
            router.push("/articles?page=1&pageSize=10");
          }}
        >
          Click Me
        </Button>
        <PaginationMui
          count={count}
          page={Number(searchParams.get("page")) || 1}
          onChange={handlePageChange}
        />

        <Stack direction="row" gap={1} alignItems="center">
          <Typography variant="body1" my={2} color="#000">
            Row Size
          </Typography>
          <Box>
            <Select
              value={searchParams.get("pageSize") || allowedLimits[0]}
              onChange={handlePageSizeChange}
            >
              {allowedLimits.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </Select>
          </Box>
        </Stack>
      </PaginationContainer>
    </>
  );
};

export default Pagination;

const PaginationContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "1.5rem",
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  background: "rgba(255, 255, 255, 0.6)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
}));

const Select = styled("select")(() => ({
  backgroundColor: "grey",
}));
