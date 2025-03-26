import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { CheckCircle2 } from "lucide-react";
// bg-[#023a51]/10
export default function WorkerSection() {
  const features = [
    "Surađujemo s partnerima iz Nepala, Indije, Bangladeša, Uzbekistana, Vijetnama i Filipina za regrutiranje najboljih kandidata prema vašim željama i potrebama.",
    "Rješavamo svu potrebnu administracije za zapošljavanje, kao što su prijevod dokumenata, ishođenje viza i radnih dozvola, ugovori o radu.",
    "Organiziramo transport radnika u Hrvatsku i upravljamo adaptacijom radnika u vašoj firmi.",
  ];
  return (
    <div className="w-full  relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/worker-bg.png" alt="Background" fill priority />
      </div>
      <section className="bg-[#053b60]/90  relative  z-20 text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center ">
          <h2 className="text-3xl font-bold mb-4">
            Ponuda sezonskih radnika iz Srbije
          </h2>
          <p className="mb-6 text-lg">
            Za vas organiziramo i nudimo sezonske radnike iz Srbije.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            Pošalji nam upit
          </Button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/images/factory-workers-greeting-each-other-successful-teamwork-Large-scaled.jpeg" // Replace with your actual image path
            alt="Sezonski radnici"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="  relative z-20 text-white py-12 px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-evenly">
        {/* Right Image */}
        <div className="md:w-1/2 lg:w-1/3 mt-8 md:mt-0 ">
          <Image
            src="/images/Velika-stavka-pexels-grape-things.jpeg" // Replace with your actual image path
            alt="Sezonski radnici"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-[400px] text-center md:text-start mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4 text-[#023a51]">
            Pouzdani partner za unaprjeđenje produktivnosti i konkurentnosti.
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Za vas vodimo proces zapošljavanja stranih radnika za poljoprivredu,
            turizam, proizvodnju, industriju, brodogradnju i građevinu. Za vaše
            potrebe naš ured u Dubaiju nudi usluge selekcije u državama Arapskog
            odnosno Perzijskog zaljeva.
          </p>

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 mb-2 shadow py-3"
            >
              <CheckCircle2 className="text-primary w-7 h-7 flex-shrink-0 mx-2" />
              <p className="text-muted-foreground text-base">{feature}</p>
            </div>
          ))}
          {/* 
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
            Pošalji nam upit
          </Button> */}
        </div>
      </section>
      <section className="relative z-20 bg-gradient-to-b from-red-700 to-pink-500 text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">
            Nudimo uslugu live intervjua
          </h2>
          <p className="mb-6 text-lg">
            Za vas organiziramo i nudimo uslugu organiziranje live intervjua u
            matičnoj zemlji radnika.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/3 flex  items-center justify-between md:items-end">
          <div>
            <h3 className="text-2xl font-semibold mb-3">KONTAKTIRAJ NAS</h3>
            <Button className="bg-[#023a51] hover:bg-[#023a51]/80 text-white px-6 py-3 rounded-lg mb-4">
              Pošalji nam upit
            </Button>
          </div>

          {/* Image */}
          <Image
            src="/images/young-people-making-podcast.jpeg" // Replace with actual image path
            alt="Live Interview"
            width={200}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
