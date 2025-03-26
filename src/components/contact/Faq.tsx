/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

const FAQSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index: any) => {
    setOpenSection(openSection === index ? null : index);
  };

  const faqData = [
    {
      question: "Koje su obveze agencije za zapošljavanje stranih radnika?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Prounalazak adekvatnog radnika prema kriterijima klijenta</li>
          <li>Izrada i predaja dokumentacije za dozvolu boravka i rada</li>
          <li>Pokrivanje troškova putnog osiguranja</li>
          <li>Ishođenje vize za boravak i rad u Hrvatskoj</li>
          <li>Trošak avionske karte za radnika</li>
        </ul>
      ),
    },
    {
      question: "Koje su moje obveze pri zapošljavanju?",
      answer: (
        <p>
          Nakon ishođenja radne dozvole, potrebno je osigurati smještaj i
          prehranu za radnika. Smještaj mora ispunjavati minimalne uvjete, a ako
          prehrana nije osigurana, mora se isplatiti dodatak za prehranu.
          Također, radnika treba prijaviti na mirovinsko i zdravstveno
          osiguranje.
        </p>
      ),
    },
    {
      question:
        "Koje uvjete trebam ispunjavati da bih mogao ishoditi dozvolu za boravak i rad?",
      answer: (
        <ul className="list-disc pl-5">
          <li>Obavljanje gospodarske aktivnosti registrirane u RH</li>
          <li>
            Zaposlenih najmanje 1/4 hrvatskih državljana u odnosu na strane
            radnike
          </li>
          <li>Potvrda Porezne uprave o nepostojanju duga</li>
          <li>Da poslodavac nije pravomoćno osuđen za radna kaznena djela</li>
        </ul>
      ),
    },
    {
      question: "Može li radnik doći odmah?",
      answer: (
        <p>
          Nažalost, ne. Za dolazak radnika potrebna je radna dozvola i viza.
          Proces traje između 45 i 90 dana, ovisno o institucijama.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#023a51]">
        Najčešća pitanja
      </h2>

      <div className="divide-y divide-gray-200">
        {faqData.map((faq, index) => (
          <div key={index} className="py-4">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => toggleSection(index)}
            >
              <span className="mr-4 text-white text-xl w-6 text-center border rounded bg-[#023a51] hover:bg-red-500">
                {openSection === index ? "−" : "+"}
              </span>
              <h3
                className={`text-lg font-medium ${
                  openSection === index ? "" : "text-gray-900"
                }`}
              >
                {faq.question}
              </h3>
            </div>
            {openSection === index && (
              <div className="mt-3 text-gray-700 pl-10">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
