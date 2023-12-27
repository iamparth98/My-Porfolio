import "./global.scss";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Parallax from "./components/parallax/parallax";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div>
      <section className="HomePage">
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

      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
