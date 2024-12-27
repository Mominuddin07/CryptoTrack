import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import Homepage from "./pages/homepage";


const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#14161a",
    },
    text: {
      primary: "#fff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
