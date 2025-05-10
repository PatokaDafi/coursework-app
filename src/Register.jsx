import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate, Navigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user, register } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    register(email, password);
    navigate("/");
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: 400, margin: "auto", mt: 5, p: 3 }}>
      <Typography variant="h5" mb={2}>
        Register New Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          margin="normal"
        />
        {error && (
          <Typography color="error" variant="body2" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Register
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
