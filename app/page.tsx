import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import RoolBrands from "./components/rool-brands/RoolBrands";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <RoolBrands />
      <ContactUs />
      <Footer />
    </main>
  );
}
