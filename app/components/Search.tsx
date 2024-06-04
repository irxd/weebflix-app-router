import { SearchOutlined } from "@mui/icons-material";
import { InputBase, Stack } from "@mui/material";

export default function Search() {
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
      // endAdornment={<Close />}
      />
    </Stack>
  );
}
