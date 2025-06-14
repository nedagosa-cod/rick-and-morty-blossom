import React from "react";

import "./App.css";
import SideBar from "./components/web/SideBar/SideBar";
import Home from "./components/web/Home/Home";
import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalPrivider";
import Character from "./components/web/Character/Character";

export default function App() {
  return (
    <GlobalProvider>
      <SideBar className="w-1/3 max-w-96" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </GlobalProvider>
  );
}
