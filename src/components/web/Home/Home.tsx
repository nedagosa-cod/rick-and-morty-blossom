import React from "react";
import imgBackground from "/homeBg.webp";

function Home() {
  return (
    <div
      className="w-full h-dvh bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${imgBackground})` }}
    >
      <div className="w-full h-full bg-white/80 flex items-center justify-center">
        <h2 className="text-8xl font-bold">Select one character</h2>
      </div>
    </div>
  );
}

export default Home;
