import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Works from "../components/Works";
import Steps from "../components/Steps";
import About from "../components/About";
import Order from "../components/Order";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Benefits />
      <Works />
      <Steps />
      <About />
      <Order />
      <Footer />
    </main>
  );
}
