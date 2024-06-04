import { Box, Container, Grid } from "@mui/material";
import Pagination from "./components/Pagination";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
        {
          Array.from({ length: 25 }).map((_, index) => (
            <Grid key={index} item xs={6} sm={4} md={2.4}>
              <Link href="/details/1">
                <Box
                  sx={{
                    height: { xs: "200px", sm: "300px" },
                    backgroundColor: "#EEEBE3",
                    borderRadius: "8px"
                  }}
                >
                </Box>
              </Link>
            </Grid>
          ))
        }
      </Grid>
      <Pagination />
    </Container>
  );
}
