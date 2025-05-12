import Hero from "../components/Hero/App";
import Secondary from "../components/Secondary/App";
import Features from "../components/Features/App";
import Characteristics from "../components/Characteristics/App";
import Services from "../components/Services/App";
import Contacts from "../components/Contacts/App";
import Footer from "../components/Footer/App";

function Home() {
    return (
        <>
            <Hero />
            <Secondary />
            <Features />
            <Characteristics />
            <Services />
            <Contacts />
            <Footer />
        </>
    )
}


export default Home;