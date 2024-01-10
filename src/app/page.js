import AppDesign from "@/components/About/AppDesgin/page";
import Blockchain from "@/components/About/Blockchain/page";
import About from "@/components/About/page";
import Contact from "@/components/Contact/page";
import Header from "@/components/Header/page";
import Services from "@/components/Services/page";
import Testimonials from "@/components/Testimonials/page";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Services />
      <About />
      <Blockchain />
      <AppDesign />
      <Contact />
      <Testimonials />
    </main>
  );
}
