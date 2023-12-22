import "./global.scss";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div>
      <section className="homepage">
        <Nav />
        <Hero />
      </section>
      <section>Parallax</section>
      <section>Hero</section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
