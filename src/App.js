import Header from "./layout/Header";
import Hero from "./layout/Hero";
import About from "./layout/AboutMe";
import Skills from "./layout/Skills";
import Protofolio from "./layout/Portofolio";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Protofolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
