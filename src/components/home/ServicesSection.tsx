"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, TrendingUp } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023a51] mb-12">
        Sve usluge koje trebate <br /> na jednom mjestu.
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-[800px] mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4 border-b border-red-400 pb-2">
              <FileText className="w-10 h-10 text-primary" />
              <CardTitle className="text-[#023a51]">
                Posredovanje pri zapošljavanju
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Povjerite nam zadatak potrage, selekcije i novačenja motiviranog i
              kvalitetnog kadra prema vašim potrebama i željama.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4 border-b border-red-400 pb-2">
              <TrendingUp className="w-10 h-10 text-primary" />
              <CardTitle className="text-[#023a51]">
                Administracija zapošljavanja
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Potpunu dokumentaciju i administraciju povjerite nama –
              osiguravamo vize, dozvole za boravak i rad, ugovore o radu.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg p-8 text-center max-w-[400px] mx-auto">
        <h3 className="text-2xl font-semibold text-[#023a51] mb-4">
          Agencija koja brine za vaše poslovanje
        </h3>
        <p className="text-muted-foreground mb-6">
          Proces selekcije, regulacije i zapošljavanja stranih radnika povjerite
          našim stručnjacima i partnerima.
        </p>
        <Link href="/services">
          <Button className="bg-[#023a51] hover:bg-[#023a51]/80">
            Pogledajte naše usluge odmah
          </Button>
        </Link>
      </div>
    </div>
  );
}
