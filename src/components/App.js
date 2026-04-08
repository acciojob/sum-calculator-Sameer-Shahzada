import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [input, setInput] = useState("");
  const [sum, setSum] = useState(0);

  // handle input change
  const handleChange = (e) => {
    const value = e.target.value;

    setInput(value);

    // only add if valid number
    if (value !== "" && !isNaN(value)) {
      setNumbers((prev) => [...prev, parseInt(value)]);
    }
  };

  // async sum calculation
  useEffect(() => {
    setTimeout(() => {
      const total = numbers.reduce((acc, curr) => acc + curr, 0);
      setSum(total);
    }, 0);
  }, [numbers]);

  return (
    <div id="main">
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={input}
        onChange={handleChange}
      />

      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;