import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import userdata from "./data";

function App() {
    const users = userdata.map((user) => {
        return (
            <Card
                key={user.id}
                {...user}
            />
        );
    });
    return (
        <>
            <Navbar />
            <Hero />

            <div className="cards">{users}</div>
        </>
    );
}

export default App;
