"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="max-w-[1250px] mx-auto  text-gray-700 py-8 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <Image src="/images/logo.png" alt="Logo" width={140} height={40} />
          <p className="mt-4 text-base text-[#616e84]">
            Povjerite svoje poslovanje našim stručnjacima te uz njihovu pomoć
            procijenite kako na najbolji način organizirati rad stranih radnika
            u vašoj firmi.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex text-xl  justify-evenly space-y-2 text-[#063556]">
          <div className="flex flex-col space-y-2">
            <Link
              href="/usluge"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              Usluge
            </Link>
            <Link
              href="/podrucja-rada"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              Područja rada
            </Link>
            <Link
              href="/reference"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              Reference
            </Link>
            <Link
              href="/o-nama"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              O nama
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link
              href="/uredi"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              Uredi
            </Link>
            <Link
              href="/najcesca-pitanja"
              className="hover:border-b-2 hover:border-[#063556]"
            >
              Najčešća pitanja
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-2xl text-[#023a51] font-semibold">
            Kontakt informacije
          </h3>
          <p className="text-lg text-[#616e84]">Stjepana Radića 38</p>
          <p className="text-lg text-[#616e84]">Virovitica 33000</p>

          <div className="mt-4 flex flex-col space-y-2 max-w-[250px]">
            <div className="flex items-center bg-gray-100 p-3 rounded-lg text-[#616e84]  hover:text-white hover:bg-[#063556]">
              <Phone className="w-4 h-4  mr-2" />
              <span className="">033 621 441</span>
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-lg text-[#616e84]  hover:text-white hover:bg-[#063556]">
              <Mail className="w-4 h-4  mr-2" />
              <span className="">info@thconsulting.hr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center border-t border-gray-300 text-sm text-gray-500 pt-4">
        <p>
          © 2025 • TH Consulting • Powered by{" "}
          <Link href="#" className="text-[#063556] hover:underline">
            E Projekt
          </Link>
        </p>
        <Link href="#top" className="block text-[#063556] hover:underline">
          Povratak na vrh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
