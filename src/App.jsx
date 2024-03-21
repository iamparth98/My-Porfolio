import "./global.scss";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <section className="Homepage">
        <Nav />
        <Hero />
      </section>
      {/* <section id="Services">
        <Parallax type={"services"} />
      </section>
      <section>Services</section> */}
      <section id="Portfolio">
        <Parallax type={"portfolio"} />
      </section>
      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
