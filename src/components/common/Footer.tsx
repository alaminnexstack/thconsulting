"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <Image src="/logo.png" alt="Logo" width={140} height={40} />
          <p className="mt-4 text-sm text-gray-600">
            Povjerite svoje poslovanje našim stručnjacima te uz njihovu pomoć
            procijenite kako na najbolji način organizirati rad stranih radnika
            u vašoj firmi.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-2">
          <Link href="/usluge" className="hover:text-blue-600">
            Usluge
          </Link>
          <Link href="/podrucja-rada" className="hover:text-blue-600">
            Područja rada
          </Link>
          <Link href="/reference" className="hover:text-blue-600">
            Reference
          </Link>
          <Link href="/o-nama" className="hover:text-blue-600">
            O nama
          </Link>
          <Link href="/uredi" className="hover:text-blue-600">
            Uredi
          </Link>
          <Link href="/najcesca-pitanja" className="hover:text-blue-600">
            Najčešća pitanja
          </Link>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold">Kontakt informacije</h3>
          <p className="text-sm text-gray-600">Stjepana Radića 38</p>
          <p className="text-sm text-gray-600">Virovitica 33000</p>

          <div className="mt-4 flex flex-col space-y-2">
            <div className="flex items-center bg-gray-100 p-3 rounded-lg">
              <Phone className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-700">033 621 441</span>
            </div>
            <div className="flex items-center bg-gray-100 p-3 rounded-lg">
              <Mail className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-gray-700">info@thconsulting.hr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-500 border-t pt-4">
        <p>
          © 2025 • TH Consulting • Powered by{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            E Projekt
          </Link>
        </p>
        <Link href="#top" className="block mt-2 text-gray-600 hover:underline">
          Povratak na vrh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
