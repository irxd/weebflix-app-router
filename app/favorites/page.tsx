import { Add } from "@mui/icons-material";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

export default function Favorites() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="white"
        mb={2}
      >
        My Favorites
      </Typography>
      <Grid container rowSpacing={4} columnSpacing={2} marginBottom={16}>
        {
          Array.from({ length: 10 }).map((_, index) => (
            <Grid key={index} item xs={6} sm={4} md={2.4}>
              <Box
                sx={{
                  height: { xs: "100px", sm: "200px" },
                  backgroundColor: "#EEEBE3",
                  borderRadius: "8px"
                }}
              >
              </Box>
            </Grid>
          ))
        }
      </Grid>
      {/* <Stack direction="column" alignItems="center" gap={4} paddingTop={16}>
        <Stack direction="column" alignItems="center">
          <Typography variant="h6" color="white" fontWeight="bold">No favorites yet!</Typography>
          <Typography color="white">You haven’t added any anime to your favorite :(</Typography>
        </Stack>

        <Button
          variant="outlined"
          color="error"
          sx={{
            textTransform: "none"
          }}
        >
          <Typography color="white">Start Exploring</Typography>
        </Button>
      </Stack> */}
    </Container>
  );
}
