'use client';

import {
  Stack,
  Pagination as MUIPagination,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
  InputBase
} from "@mui/material";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { PaginationProps } from "../lib/definitions";

const StyledPagination = styled(MUIPagination)({
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

const StyledInput = styled(InputBase)({
  '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },
  '& input[type=number]': {
    '-moz-appearance': 'textfield',
  },
});

export default function Pagination({ totalPage, currentPage }: PaginationProps) {
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

  const handleGoToPage = useDebouncedCallback((page) => {
    if (page) {
      const params = new URLSearchParams(searchParams);
      if (page) {
        params.set('page', page);
      } else {
        params.delete('page');
      }
      replace(`/?${params.toString()}`);
    }

  }, 500);

  return (
    <Stack
      display={totalPage > 1 ? "flex" : "none"}
      direction={{ xs: "column", sm: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={4}
      marginBottom={16}
    >
      <StyledPagination
        count={totalPage}
        size={isSmallScreen ? 'small' : 'large'}
        onChange={handleChange}
        page={currentPage}
      />
      <Stack direction="row" alignItems="center" gap={2}>
        <Typography color="white" fontSize={{ xs: "small", sm: "medium" }}>Go to</Typography>
        <StyledInput
          sx={{
            border: "1px solid white",
            color: "white",
            borderRadius: "4px",
            width: "56px",
            paddingX: "8px",
            fontSize: { xs: "small", sm: "medium" },
          }}
          onChange={(e) => {
            handleGoToPage(e.target.value);
          }}
          type="number"
        />
      </Stack>
    </Stack>
  );
}
