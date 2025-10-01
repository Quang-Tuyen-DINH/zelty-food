import React from "react";
import { ToastContainer } from "react-toastify";
import { AppStyled } from "../components/styles/App.styled";
import AppRoutes from "../routes/AppRoutes";

function App() {

  return (
    <AppStyled className="zelty-restaurant">
      <AppRoutes />
      <ToastContainer />
    </AppStyled>
  );
}

export default App;
