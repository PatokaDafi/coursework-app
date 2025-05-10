import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Switch,
} from "@mui/material";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useThemeMode } from "./ThemeContext.jsx";
import { styled } from "@mui/material/styles";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#f5f5f5" : "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage:
        theme.palette.mode === "dark"
          ? `url("data:image/svg+xml;utf8,${encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="black"><path d="M12 3.19V1h0v2.19zm6.36 1.45l1.42-1.42-1.42 1.42zM20.81 12H23h-2.19zm-1.45 6.36l1.42 1.42-1.42-1.42zM12 20.81V23h0v-2.19zm-6.36-1.45l-1.42 1.42 1.42-1.42zM3.19 12H1h2.19zm1.45-6.36L3.22 4.22l1.42 1.42z" />'
            )}")`
          : `url("data:image/svg+xml;utf8,${encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 24 24" fill="white"><path d="M12 4a8 8 0 0 0 0 16 8 8 0 0 0 0-16z" />'
            )}")`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Navbar = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
            flexGrow: 1,
          }}
        >
          Coursework App
        </Typography>

        <ThemeSwitch
          checked={mode === "dark"}
          onChange={toggleMode}
          inputProps={{ "aria-label": "theme toggle" }}
        />

        <Box sx={{ display: "flex", gap: 2, ml: 2 }}>
          <SignedIn>
            <Button color="inherit" component={Link} to="/dashboard">
              Dashboard
            </Button>
            <UserButton afterSignOutUrl="/login" />
          </SignedIn>

          <SignedOut>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </SignedOut>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
