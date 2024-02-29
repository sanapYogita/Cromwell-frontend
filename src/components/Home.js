import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import theme from "../style/theme";

export default function Home() {
  return (
    <Box
      sx={{
        ...theme.sharedStyles.centerDiv,
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // subtle shadow
      }}
    >
      <Container component="main" maxWidth="xs">
        <Typography
          component="h1"
          variant="h5"
          sx={{
            textShadow: "2px 2px 8px rgba(255, 255, 255, 0.5)", // Increased shadow with white color
          }}
        >
          Assessment done by Yogita Sanap
        </Typography>
        {/* ... rest of your home page content */}
      </Container>
    </Box>
  );
}
