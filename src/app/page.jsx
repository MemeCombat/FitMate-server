import React from "react";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Hero2 from "./components/Hero2";
import LayoutWithNavbar from "./with-navbar";

export default function Home() {
  return (
    <LayoutWithNavbar>
      <div
        className="min-h-screen bg-white font-monumentRegular text-black"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/dd/b8/5d/ddb85dc58883b87a2ea5324dd37b0fdf.gif')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <main className="p-6 space-y-6">
          <Hero />
          <Slider />
          <Hero2 />
        </main>
      </div>
    </LayoutWithNavbar>
  );
}
