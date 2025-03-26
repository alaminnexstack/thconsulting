"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// import { useMobile } from "@/hooks/use-mobile";
import Image from "next/image";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { title: "Naslovnica", href: "/" },
  {
    title: "Usluge",
    href: "/services",
    children: [
      { title: "Usluga 1", href: "/services/1" },
      { title: "Usluga 2", href: "/services/2" },
      { title: "Usluga 3", href: "/services/3" },
    ],
  },
  { title: "Područja rada", href: "/industries" },
  { title: "Reference", href: "/reference" },
  { title: "O nama", href: "/about-us" },
];

export function Navbar() {
  const pathname = usePathname();
  // const isMobile = useMobile();

  return (
    <>
      {/* Top Navbar */}
      <header className="max-w-[1250px] mx-auto bg-white  px-2">
        <div className="flex items-center">
          <div className="flex items-center pr-8">
            <Image src="/images/logo.png" alt="" width={200} height={200} />
          </div>
          <div className="flex-1 w-full pt-8">
            <div className="flex items-center justify-between space-x-6">
              <div className="hidden items-center space-x-6 lg:flex border-b border-gray-400 pb-4">
                <Link
                  href="/uredi"
                  className="text-sm text-[#0f2a47] hover:underline"
                >
                  UREDI
                </Link>
                <Link
                  href="/pitanja"
                  className="text-sm text-[#0f2a47] hover:underline"
                >
                  NAJČEŠĆA PITANJA
                </Link>
              </div>

              <div className="flex items-center text-lg space-x-6 border-b border-gray-400 pb-4">
                <Link
                  href="/contact"
                  className="flex items-center text-[#0f2a47] hover:underline"
                >
                  <Phone className="mr-1 h-4 w-4" />
                  Nazovi nas
                </Link>
                <Link
                  href="/contact"
                  className="text-[#0f2a47] hover:underline"
                >
                  Kontaktiraj nas
                </Link>
                <div className="flex items-center space-x-6">
                  <Link
                    href="/en"
                    className="block h-5 w-7 overflow-hidden rounded"
                  >
                    <Image
                      src="/images/en_GB.png"
                      alt="English"
                      width={28}
                      height={20}
                    />
                  </Link>
                  <Link
                    href="/hr"
                    className="block h-5 w-7 overflow-hidden rounded"
                  >
                    <Image
                      src="/images/hr.png"
                      alt="Hrvatski"
                      width={28}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Navbar (Sticky) */}
            <div className="relative">
              <nav className="sticky top-0 left-0 right-0 z-50 bg-white ">
                <div className="flex items-center justify-between mt-2 px-4 lg:px-8">
                  {navItems.map((item) => (
                    <div key={item.title} className="relative group">
                      {item.children ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <div
                              className={cn(
                                "flex items-center rounded-none gap-1 text-lg py-4 text-[#0f2a47] hover:bg-gray-50 hover:border-y-2 hover:border-[#0f2a47]",
                                pathname === item.href &&
                                  "border-y-2 border-[#0f2a47]"
                              )}
                            >
                              {item.title}
                              <ChevronDown className="h-4 w-4" />
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="start" className="w-48">
                            {item.children.map((child) => (
                              <DropdownMenuItem key={child.title} asChild>
                                <Link href={child.href}>{child.title}</Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-4 px-4 text-[#0f2a47] text-lg hover:bg-gray-50 hover:border-y-2 hover:border-[#0f2a47]",
                            pathname === item.href &&
                              "border-y-2 border-[#0f2a47]"
                          )}
                        >
                          {item.title}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Link
                    href="/contact"
                    className="rounded-2xl bg-[#0f2a47] px-6 py-3 text-white hover:bg-red-500"
                  >
                    Kontaktirajte nas
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
