import React from "react";

import "./App.css";
import SideBar from "./components/web/SideBar/SideBar";

function App() {
  return (
    <>
      <SideBar className="w-1/3 max-w-96" />
      <main className="w-2/3 bg-slate-100">
        <h1>Rick and Morty list</h1>
      </main>
    </>
  );
}

export default App;
