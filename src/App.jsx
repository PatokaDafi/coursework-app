import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp } from "@clerk/clerk-react";
import ProtectPage from "./ProtectPage.jsx";
import Dashboard from "./DashBoard.jsx";
import Home from "./Home.jsx";
import Navbar from "./Navbar.jsx";
import Landing from "./Landing.jsx";
import Login from "./Login.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/login"
          element={
            <SignIn
              routing="path"
              path="https://allowing-locust-93.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fhome"
              redirectUrl="/home"
            />
          }
        />

        <Route
          path="/register"
          element={
            <SignUp
              routing="path"
              path="https://allowing-locust-93.accounts.dev/sign-up"
              redirectUrl="/home"
            />
          }
        />
        <Route
          path="/login/factor-one"
          element={<Navigate to="/home" replace />}
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

        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
