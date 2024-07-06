
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Certificates from "./Components/Certificate";
import Skills from "./Components/Skills";
import InternshipSection from "./Components/Internship";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-0 px-4 bg-[#121212]">
      <Navbar />
      <section id="home">
        <Hero />
        <section id="skills">
        <Skills />
      </section>
      <section id="internship">
        <InternshipSection/>
      </section>
      </section>
      <section id="certificate">
        <Certificates/>
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}