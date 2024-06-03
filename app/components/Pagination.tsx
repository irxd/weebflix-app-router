import { Stack, Pagination as MUIPagination, Typography } from "@mui/material";

export default function Pagination() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="center" gap={4} marginBottom={16}>
      <MUIPagination
        count={10}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#fff"
          },
          "& .Mui-selected": {
            color: "white",
            backgroundColor: "#B81D24"
          },
          "& .Mui-selected:hover": {
            backgroundColor: "#B81D24"
          },
        }}
      />
      <Typography color="white">Go To</Typography>
    </Stack>
  );
}
