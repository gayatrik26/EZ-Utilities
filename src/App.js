import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Homepage from "./components/Homepage";
import ColorPicker from "./components/ColorPicker";
import TextUtility from "./components/TextUtility";
import PasswordGenerator from "./components/PasswordGenerator";
import TodoList from "./components/TodoList";
import RockPaperScissors from "./components/RockPaperScissors";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WeatherWise from "./components/WeatherWise";


const App = () => {
    const [activeComp, setActiveComp] = useState(0);
    const goBack = () => {
        setActiveComp(0);
    }
    const renderComponent = () => {
        switch (activeComp) {
            case 0:
                return <Homepage setActive={setActiveComp} />;
            case 1:
                return <ColorPicker goBackClick={goBack} />;
            case 2:
                return <TextUtility goBackClick={goBack} />;
            case 3:
                return <WeatherWise goBackClick={goBack}/>;
            case 4:
                return <PasswordGenerator goBackClick={goBack} />;
            case 5:
                return <TodoList goBackClick={goBack} />;
            case 6:
                return <RockPaperScissors goBackClick={goBack} />;
            default:
                return <></>;
        }
    };
    return (
        <div className="popup-container w-80 h-auto bg-[#cbf3f0] text-[#2ec4b6] flex flex-col justify-between">
            <Router>
                <Navbar title="EZ Utilities" />
                {renderComponent()}
                <Footer title="EZ Utilities" />
            </Router>
        </div>
    );
};

export default App;