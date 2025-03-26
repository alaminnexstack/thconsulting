/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const formSchema = z.object({
  fullName: z.string().min(2, "Ime je obavezno"),
  phone: z.string().min(6, "Telefon je obavezan"),
  email: z.string().email("Nevažeća email adresa"),
  company: z.string().min(2, "Naziv firme je obavezan"),
  workers: z.number().min(1).max(100),
  message: z.string().optional(),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { workers: 1 },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="bg-red-700 text-white py-18 px-10 flex flex-col md:flex-row gap-8 rounded-lg max-w-5xl mx-auto">
      {/* Left Section - Contact Info */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold">
          Naš tim stoji vam na raspolaganju.
        </h2>
        <div>
          <p className="font-semibold">📍 Uredi</p>
          <p>Stjepana Radića 38, Virovitica, Hrvatska</p>
          <p>The Meydan Hotel, Dubai, U.A.E</p>
        </div>
        <div>
          <p className="font-semibold">📧 Kontakt</p>
          <p>info@thconsulting.hr</p>
          <p>033 621 441</p>
        </div>
        <div>
          <p className="font-semibold">⏰ Radno vrijeme</p>
          <p>Ponedjeljak - petak</p>
          <p>8.00 - 16.00</p>
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="md:w-1/2 bg-white p-6 rounded-lg text-black shadow-md">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              {...register("fullName")}
              placeholder="Ime i prezime*"
              className="border p-2"
            />
            <Input
              {...register("phone")}
              placeholder="Broj mobitela*"
              className="border p-2"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              {...register("email")}
              placeholder="Email*"
              className="border p-2"
            />
            <Input
              {...register("company")}
              placeholder="Naziv firme*"
              className="border p-2"
            />
          </div>
          <div>
            <label className="font-semibold">
              Broj potrebnih radnika: {watch("workers")}
            </label>
            <Slider
              defaultValue={[1]}
              max={100}
              step={1}
              onValueChange={(val) => setValue("workers", val[0])}
            />
          </div>
          <Textarea
            {...register("message")}
            placeholder="Kako vam možemo pomoći?"
            className="border p-2"
          />
          <Button type="submit" className="w-full bg-blue-900 text-white">
            Pošaljite upit
          </Button>
        </form>
      </div>
    </div>
  );
}
