import { Box, Container, Grid } from "@mui/material";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <main>
      <Container>
        <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
          {
            Array.from({ length: 25 }).map((_, index) => (
              <Grid key={index} item xs={6} sm={4} md={2.4}>
                <Box
                  sx={{
                    height: "300px",
                    backgroundColor: "#EEEBE3",
                    borderRadius: "8px"
                  }}
                >
                </Box>
              </Grid>
            ))
          }
        </Grid>
        <Pagination />
      </Container>
    </main>
  );
}
