'use client';

import { Stack, Pagination as MUIPagination, Typography, styled, useMediaQuery, useTheme, InputBase } from "@mui/material";

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
});;

export default function Pagination() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={4}
      marginBottom={16}
    >
      <CustomPagination
        count={10}
        size={isSmallScreen ? 'small' : 'large'}
      />
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography color="white" fontSize={{ xs: "14px", sm: "16px" }}>Go to</Typography>
        <InputBase
          sx={{
            border: "1px solid white",
            color: "white",
            borderRadius: "4px",
            width: "46px",
            paddingX: "8px",
            fontSize: { xs: "14px", sm: "16px" },
          }}
        />
      </Stack>
    </Stack>
  );
}
