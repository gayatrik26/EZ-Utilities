import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import Homepage from './components/Homepage';
import ColorPicker from './components/ColorPicker';
import TextUtility from './components/TextUtility';
import YouTubePause from './components/YouTubePause';
import PasswordGenerator from './components/PasswordGenerator';
import TodoList from './components/TodoList';
import RockPaperScissors from './components/RockPaperScissors';
import ThisOrThat from './components/ThisOrThat';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="popup-container">
            <Router>
                <Navbar title="EZ Utilities" />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/color-picker" element={<ColorPicker />} />
                    <Route path="/text-utility" element={<TextUtility />} />
                    <Route path="/youtube-pause" element={<YouTubePause />} />
                    <Route path="/password-generator" element={<PasswordGenerator />} />
                    <Route path="/todo-list" element={<TodoList />} />
                    <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
                    <Route path="/this-or-that" element={<ThisOrThat />} />
                </Routes>
                <Footer title="EZ Utilities" />
            </Router>
        </div>
    );
}

export default App;
