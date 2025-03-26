import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import HiringProcess from "@/components/home/HiringProcess";
import LogoGallery from "@/components/home/LogoGallary";
import ServicesSection from "@/components/home/ServicesSection";
import WorkerSection from "@/components/home/WorkerSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <LogoGallery />
      <WorkerSection />
      <HiringProcess />
      <ContactSection />
    </div>
  );
}
