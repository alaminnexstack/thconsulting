import React from "react";

export default function ContactPage() {
  return (
    <div className=" min-h-screen ">
      <div
        style={{
          backgroundImage: "url('/images/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[400px] w-full flex items-center justify-center"
      >
        <div className="text-start max-w-[500px] h-[400px] mt-8">
          <p className="text-4xl  text-[#023a51] my-4">Kontaktirajte nas</p>
          <p className="text-5xl  text-[#023a51] font-bold my-4">
            Započnimo našu suradnju.
          </p>
          <p className="text-xl  text-foreground-muted">
            Kontaktirajte tim naših stručnjaka i postavite upit za svoje
            poslovanje bez obavezujuće ponude
          </p>
        </div>
      </div>
    </div>
  );
}
