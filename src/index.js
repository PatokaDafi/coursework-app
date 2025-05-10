import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from "./ThemeContext.jsx";

const clerkPublishableKey =
  "pk_test_YWxsb3dpbmctbG9jdXN0LTkzLmNsZXJrLmFjY291bnRzLmRldiQ";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <CustomThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomThemeProvider>
  </ClerkProvider>
);
root.render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <CustomThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CustomThemeProvider>
    </React.Suspense>
  </ClerkProvider>
);
