import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Regrutacija radnika",
    description:
      "Obavljamo selekciju kandidata te proces dovođenja u Hrvatsku pokrećemo tek kada smo sigurni da smo pronašli odgovarajućeg radnika.",
    image: "/images/1-Large.jpeg", // Replace with actual image path
  },
  {
    id: 2,
    title: "Radne dozvole",
    description:
      "Proces dovođenja radnika u prosjeku traje 90 dana. Na neke stvari ne možemo utjecati budući da ih sukladno Zakonu o strancima provode HZZ, MUP i MVP.",
    image: "/images/2-Large.jpeg", // Replace with actual image path
  },
  {
    id: 3,
    title: "Zapošljavanje i adaptacija",
    description:
      "Naš posao ne završava dolaskom radnika i sklapanjem ugovora o radu jer s vama ostajemo cijelo vrijeme kao posrednici između vas i radnika.",
    image: "/images/3-Large.jpeg", // Replace with actual image path
  },
];

export default function HiringProcess() {
  return (
    <section className="max-w-[1250px] mx-auto py-16 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-[#023a51] mb-12 max-w-[400px] mx-auto">
        Vodimo proces zapošljavanja kroz svaki korak.
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition max-w-[400px] mx-auto"
          >
            <h3 className="text-xl font-semibold text-[#023a51] my-3">
              {step.title}
            </h3>
            <div className="relative">
              <Image
                src={step.image}
                alt={step.title}
                width={300}
                height={200}
                className="w-full h-auto rounded-md"
              />
            </div>
            <div className="border border-red-400 mt-4"></div>

            <p className="text-gray-600 mt-2 text-justify">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
