'use client';

import { SearchOutlined } from "@mui/icons-material";
import { InputBase, Stack } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      if (term) {
        params.set('query', term);
      } else {
        params.delete('query');
      }
      replace(`/?${params.toString()}`);
    }

  }, 300);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: "1px solid white", borderRadius: "4px", p: "2px"
      }}
    >
      <InputBase
        sx={{ color: "white" }}
        startAdornment={<SearchOutlined />}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      // endAdornment={<Close />}
      />
    </Stack>
  );
}
