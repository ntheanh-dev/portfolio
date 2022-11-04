import Header from "../../layout/Header";
import Hero from "../Hero";
import About from "../AboutMe";
import Skills from "../Skills";
import Protofolio from "../Protofolio";
function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Skills />
            <Protofolio />
        </>
    );
}

export default Home;