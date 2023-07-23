import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./fonts/AmazonEmber_Lt.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006DAD",
    },
    secondary: {
      main: "#FFF",
    },
  },
  typography: {
    fontFamily: ["AmazonEmber"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// Removing the service worker by default as it can cause issues with users not being able to see new
// versions of the app.
// More info: https://console.harmony.a2z.com/docs/troubleshooting.html#React%20Gotchas

// registerServiceWorker();
