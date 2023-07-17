import React from "react";
import MainPage from "./Screens/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
