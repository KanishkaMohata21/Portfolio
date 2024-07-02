import AboutUs from "./Components/AboutUs";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from "./Components/footer";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto py-0 px-4 bg-[#121212]">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
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
