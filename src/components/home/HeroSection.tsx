"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Dynamically set video source to ensure correct path
    setVideoSrc("/Th-consulting-video.mp4");
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        {videoSrc && (
          <>
            <source src={videoSrc} type="video/mp4" />
            <source src="/Th-consulting-video.webm" type="video/webm" />
          </>
        )}
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          Agencija za zapošljavanje stranih radnika
        </h1>
        <p className="mt-4 text-lg">
          Pouzdano i sigurno rješenje za svoje poslovanje prepustite našim
          stručnjacima.
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-lg">
          Započnimo suradnju
        </button>
      </div>
    </section>
  );
}
