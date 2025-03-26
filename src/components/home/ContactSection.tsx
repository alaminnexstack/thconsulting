"use client";

import React, { useState } from "react";
import { MapPin, Mail, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
export default function ContactSection() {
  const [workerCount, setWorkerCount] = useState(1);

  const handleSliderChange = (value: number[]) => {
    setWorkerCount(value[0]);
  };

  return (
    <section className="bg-black bg-gradient-to-br from-[#063556] to-gray-900 ">
      <div
        style={{
          backgroundImage: "url('/images/download.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" min-h-screen flex justify-center items-center"
      >
        <div className="max-w-7xl absolute mx-auto bg-red-700 rounded-2xl  px-6 md:px-20 mb-12 py-16 grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="text-white space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Naš tim stoji vam na raspolaganju.
            </h2>

            {/* Address */}
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8" />
              <div>
                <p className="font-semibold">Uredi</p>
                <p>Stjepana Radića 38, Virovitica, Hrvatska</p>
                <p>The Meydan Hotel, Grandstand, 6th floor,</p>
                <p>Meydan Road, Nad Al Sheba, Dubai, U.A.E</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-4">
              <Mail className="w-8 h-8" />
              <div>
                <p className="font-semibold">Kontakt</p>
                <p>info@thconsulting.hr</p>
                <p>033 621 441</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex items-center space-x-4">
              <Clock className="w-8 h-8" />
              <div>
                <p className="font-semibold">Radno vrijeme</p>
                <p>Ponedjeljak - petak</p>
                <p>8.00 - 16.00</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Ime i prezime*</Label>
                  <Input id="fullName" placeholder="Ime Prezime*" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Broj mobileta*</Label>
                  <Input
                    id="mobile"
                    placeholder="091 234 5678*"
                    type="tel"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    placeholder="ime@mail.com*"
                    type="email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Naziv firme*</Label>
                  <Input id="company" placeholder="primjer d.o.o.*" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Broj potrebnih radnika?*</Label>
                <div className="flex  items-center">
                  <span className="text-muted-foreground inline-block border  px-4 py-2 border-gray-300 rounded mr-2">
                    {workerCount}
                  </span>
                  <Slider
                    defaultValue={[1]}
                    max={150}
                    step={1}
                    onValueChange={handleSliderChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Kako vam možemo pomoći?</Label>
                <Textarea
                  id="message"
                  placeholder="Treba mi pomoć..."
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#053b60] hover:bg-[#053b60]/90"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" /> Pošaljite upit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
