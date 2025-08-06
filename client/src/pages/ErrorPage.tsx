import { Box, Typography, Container } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
export default function ErrorPage() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        gap={2}
      >
        <ConstructionIcon sx={{ fontSize: 60 }} />
        <Typography variant="h5" fontWeight={500}>
          Something went wrong
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Sorry, we encountered an internal error. Please try again later.
        </Typography>
      </Box>
    </Container>
  );
}
