import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ProtectPage from "./ProtectPage.jsx";
import Dashboard from "./DashBoard.jsx";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/login"
          element={<SignIn routing="path" path="/login" />}
        />

        <Route
          path="/register"
          element={<SignUp routing="path" path="/register" />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectPage>
              <Dashboard />
            </ProtectPage>
          }
        />

        <Route
          path="/home"
          element={
            <ProtectPage>
              <Home />
            </ProtectPage>
          }
        />

        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};

export default App;
