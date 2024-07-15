import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";

import Homepage from "./pages/Homepage";
import QuizPage from "./pages/QuizPage";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import UserContext from "./components/UserContext";

const App = () => {
    const [user, setUser] = useState(null);

    const getUser = async () => {

        try {
            const response = await axios("/api/user");
            setUser(response.data);
        } catch (error) {
            setUser(false);
        }
    };

    useEffect(() => {

        getUser();
    }, []);

    return (
        <div>
            <UserContext.Provider value={{ user, setUser, getUser }}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/quiz" element={<QuizPage />} />
                        {user?
                        <Route path="/user" element={<Profile />} />
                        : ""} 
                        <Route path="/about" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </div>
    );
};

export default App;
