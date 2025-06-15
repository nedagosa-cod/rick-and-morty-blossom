import React from "react";

import "./App.css";
import SideBar from "./components/web/SideBar/SideBar";
import Home from "./components/web/Home/Home";
import { Route, Routes } from "react-router-dom";
import Character from "./components/web/Character/Character";

export default function App() {
  return (
    <div className="flex flex-col md:flex-row w-full relative overflow-x-hidden">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<Character />} />
      </Routes>
    </div>
  );
}
