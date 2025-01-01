import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/index";

const App: React.FC = () => (
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);


export default App;
