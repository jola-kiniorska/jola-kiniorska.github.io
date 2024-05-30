import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage.tsx";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
