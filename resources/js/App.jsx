import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage'
import QuizPage from './pages/QuizPage';
import Profile from './pages/Profile';
import About from './pages/About';

import Header from './components/Header'


const App = () => (

    <div>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/quiz" element={<QuizPage />}/>
                <Route path="/user" element={<Profile />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    </div>
)
 



export default App;