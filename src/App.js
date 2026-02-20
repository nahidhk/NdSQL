import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import Nav from "./components/system/Nav";
import { Route, Routes } from "react-router-dom";



function App() {
  useEffect(() => {
    document.title = "NdSQL - Home";
  })
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/"  element={<Home />}/>
      </Routes>
    </>
  );
}

export default App;