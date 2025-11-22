import { Header } from "./components/Header";
import { Lancamentos } from "./components/Lancamentos";
import "./app.scss";
import { Banner } from "./components/Banner";
import { Looks } from "./components/Looks";

function App() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Looks />
                <Lancamentos />
            </main>
        </>
    );
}

export default App;
