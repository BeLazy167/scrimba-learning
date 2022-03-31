import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <div className='cards'>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default App;
