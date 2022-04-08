import "./App.css";
import Die from "./components/Die";
import { useState } from "react";
function App() {
    const [dice, setdice] = useState(allNewDice());
    function allNewDice() {
        let listOfDice = [];
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random() * 6) + 1;
            listOfDice.push(randomNumber);
        }
        return listOfDice;
    }
    const diceElements = dice.map((die) => <Die value={die} />);

    return (
        <main>
            <div className="main-container">
                {diceElements}

                <button onClick={() => setdice(allNewDice())}>Roll Dice</button>
            </div>
        </main>
    );
}

export default App;
