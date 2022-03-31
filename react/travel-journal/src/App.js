import "./App.css";
import Header from "./components/header";
import MainSection from "./components/mainsection";
import data from "./data";
function App() {
    const cards = data.map((loc) => {
        return <MainSection key={loc.id} {...loc} />;
    });
    return (
        <div className="App">
            <Header />
            {cards}
        </div>
    );
}

export default App;
