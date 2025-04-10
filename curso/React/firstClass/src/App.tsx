import React, { useState, useEffect } from "react";
import CustomCard from "./components/CustomCard/CustomCard";
import CustomButton from "./components/CustomButton";
import "./App.css";

const App: React.FC = () => {
    const [contVar, setCont] = useState(0);
    const [stateVar, setState] = useState(false);
    const [v1, setV1] = useState("");
    const [v2, setV2] = useState("");
    const [result, setResult] = useState<number | null>(null);
    const [operator, setOperator] = useState("+");

    const incrementFunc = () => {
        setCont(contVar + 1);
    };

    const decrementFunc = () => {
        setCont(contVar - 1);
    };

    const changeState = () => {
        setState(!stateVar);
    };

    const handleV1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setV1(event.target.value);
    };

    const handleV2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setV2(event.target.value);
    };

    const handleOperatorChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setOperator(event.target.value);
    };

    const handleCalc = () => {
       let resultVar;
        if (v1 === "" || v2 === "") {
            alert("Please enter both numbers");
            return;
        }
        if (operator === "+") {
            const resultVar = parseFloat(v1) + parseFloat(v2);
            setResult(resultVar);
        } else if (operator === "-") {
            const resultVar = parseFloat(v1) - parseFloat(v2);
            setResult(resultVar);
        } else if (operator === "/") {
            if (v2 === 0) {
                setResult(NaN);
            } else {
                const resultVar = parseFloat(v1) / parseFloat(v2);
                setResult(resultVar);
            }
        } else if (operator === "*") {
            resultVar = parseFloat(v1) * parseFloat(v2);
            setResult(resultVar);
        } else {
          setResult(NaN);
        }
    };

    useEffect(() => {
        document.title = "I did Change the Title Using React";
    }, []);

    return (
        <>
            <CustomCard />

            <h1>Contador: {contVar}</h1>
            <button onClick={incrementFunc}>Incremente</button>

            <button onClick={decrementFunc}>Decremente</button>

            <br />
            <br />

            <button onClick={changeState}>{stateVar ? "On" : "Off"}</button>

            <h2>Calculator</h2>
            <input type="number" value={v1} onChange={handleV1Change} />
            <br />
            <input type="number" value={v2} onChange={handleV2Change} />
            <br />
            <br />
            <label htmlFor="options">Choice a operator: </label>
            <select id="options" name="options" onChange={handleOperatorChange}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <br />
            <br />
            <button onClick={handleCalc}>=</button>
            <h3>{result}</h3>
        </>
    );
};

export default App;
