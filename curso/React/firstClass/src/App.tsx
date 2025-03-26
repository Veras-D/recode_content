import React, { useEffect } from "react";
import CustomCard from "./components/CustomCard/CustomCard";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "I did Change the Title Using React";
  }, []);
    return (
        <>
            <CustomCard />
        </>
    );
}

export default App;
