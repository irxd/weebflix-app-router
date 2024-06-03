'use client';

import { Stack, Pagination as MUIPagination, Typography, styled } from "@mui/material";

const CustomPagination = styled(MUIPagination)({
  '& .MuiPaginationItem-root': {
    color: 'white',
  },
  '& .MuiPaginationItem-page.Mui-selected': {
    backgroundColor: '#B81D24',
  },
  '& .MuiPaginationItem-page.Mui-selected:hover': {
    backgroundColor: '#B81D24',
  },
});

export default function Pagination() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={4} marginBottom={16}>
      <CustomPagination
        count={10}
      />
      <Typography color="white">Go To</Typography>
    </Stack>
  );
}
