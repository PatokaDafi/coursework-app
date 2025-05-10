import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import toyotaLogo from "./png-transparent-toyota-gazoo-racing-hd-logo.png";

const Landing = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        backgroundColor: "transparent",
        px: 2,
        textAlign: "center",
      }}
    >
      <Box
        component="img"
        src={toyotaLogo}
        onError={(e) => (e.target.style.display = "none")}
        alt="Toyota Gazoo Racing"
        sx={{
          maxWidth: 300,
          maxHeight: 150,
          objectFit: "contain",
          mb: 2,
          backgroundColor: "transparent",
        }}
      />

      <Typography variant="h4" fontWeight="bold">
        Welcome to Coursework App
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="https://allowing-locust-93.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fhome"
          size="large"
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="https://allowing-locust-93.accounts.dev/sign-up"
          size="large"
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default Landing;
