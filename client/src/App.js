import { useState, useEffect } from "react";
import HomePage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
