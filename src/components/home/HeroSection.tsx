"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    // Dynamically set video source to ensure correct path
    setVideoSrc("/Th-consulting-video.mp4");
  }, []);

  return (
    <section className="relative w-full h-[600px] flex items-center justify-center my-8">
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

      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg-removebg-preview.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-50 z-10"
        />
      </div>

      {/* Darker Overlay for Contrast */}
      <div className="absolute inset-0 bg-[#023a51]/60 z-20"></div>

      {/* Content */}
      <div className="relative z-30 text-start  text-white px-4 max-w-[400px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          Agencija za zapošljavanje stranih radnika
        </h1>
        <p className="mt-4 text-lg">
          Pouzdano i sigurno rješenje za svoje poslovanje prepustite našim
          stručnjacima.
        </p>

        <button className="mt-6 px-6 py-3 bg-[#023a51] hover:bg-red-400 text-white rounded-lg">
          Započnimo suradnju
        </button>
      </div>
    </section>
  );
}
