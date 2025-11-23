import "./app.scss";
import { Header } from "./components/Header";
import { Banner } from "./components/Banner";
import { Looks } from "./components/Looks";
import { Lancamentos } from "./components/Lancamentos";
import { Novidades } from "./components/Novidades";
import { Footer } from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Looks />
                <Lancamentos />
                <Novidades />
            </main>
            <Footer />
        </>
    );
}

export default App;
