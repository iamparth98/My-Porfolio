import "./global.scss";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Parallax from "./components/parallax/parallax";

function App() {
  return (
    <div>
      <section className="HomePage">
        <Nav />
        <Hero />
      </section>
      <section>
        <Parallax type={"services"} />
      </section>
      <section id="Services">Services</section>
      <section>
        <Parallax type={"portfolio"} />
      </section>
      <section id="Portfolio"></section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

export default App;
