import { SearchOutlined } from "@mui/icons-material";
import { AppBar, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
  return (
    <AppBar position="fixed" sx={{ height: "80px", backgroundColor: "black" }}>
      <Container
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between"
        }}>
        <Image src="/logo.png" alt="logo" width={120} height={36} />
        <Stack direction="row" gap="16px">
          <SearchOutlined />
          <Typography>My Favorites</Typography>
        </Stack>
      </Container>
    </AppBar>
  );
}