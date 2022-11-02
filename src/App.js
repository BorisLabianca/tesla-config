import { useState } from "react";
import "./App.css";
import OptionSelector from "./components/OptionSelector";

function App() {
  const [count1, setCount1] = useState(90700);
  const [count2, setCount2] = useState(0);
  return (
    <div className="App">
      <h1>Tesla config</h1>
      <h2>Sélectionnez votre véhicule</h2>
      <OptionSelector
        description={"Grande autonomie"}
        price={90700}
        count={count1}
        setCount={setCount1}
      />
      <OptionSelector
        description={"Performance"}
        price={106700}
        count={count1}
        setCount={setCount1}
      />
      <h2>Sélectionnez la couleur</h2>
      <OptionSelector
        description={"Blanc nacré multicouches"}
        price={0}
        count={count2}
        setCount={setCount2}
      />
      <OptionSelector
        description={"Noir uni"}
        price={1000}
        count={count2}
        setCount={setCount2}
      />
      <div className="price-buy">
        <p className="price">{count1 + count2} €</p>
        <div
          onClick={() => {
            alert("Thanks for clicking !");
          }}
          className="buy-btn"
        >
          Buy!
        </div>
      </div>
    </div>
  );
}

export default App;
