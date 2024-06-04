'use client';

import { Stack, Pagination as MUIPagination, Typography, styled, useMediaQuery, useTheme, InputBase } from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', value.toString());

    replace(`${pathname}?${params.toString()}`);
  };

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
        onChange={handleChange}
      />
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography color="white" fontSize={{ xs: "small", sm: "medium" }}>Go to</Typography>
        <InputBase
          sx={{
            border: "1px solid white",
            color: "white",
            borderRadius: "4px",
            width: "46px",
            paddingX: "8px",
            fontSize: { xs: "small", sm: "medium" },
          }}
        />
      </Stack>
    </Stack>
  );
}
