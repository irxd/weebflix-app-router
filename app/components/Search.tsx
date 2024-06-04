'use client';

import { SearchOutlined } from "@mui/icons-material";
import { InputBase, Stack } from "@mui/material";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense } from "react";
import { useDebouncedCallback } from 'use-debounce';

function SearchInput() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const path = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      if (path === "/") {
        params.delete('query');
      }
    }

    // Prevent redirect to homepage when clearing search on other page
    if (!term && path !== "/") return;

    replace(`/?${params.toString()}`);
  }, 300);

  return (
    <InputBase
      sx={{ color: "white" }}
      startAdornment={<SearchOutlined />}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get('query')?.toString()}
    />
  );
}

export default function Search() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        border: "1px solid white",
        borderRadius: "4px",
        py: "2px",
        px: "4px",
      }}
    >
      <Suspense>
        <SearchInput />
      </Suspense>
    </Stack>
  );
}
