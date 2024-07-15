import axios from "axios";
import { useContext } from "react";
import UserContext from "./UserContext";

const Logout = () => {
    const { getUser } = useContext(UserContext);

    const handleLogout = async () => {
        try {
            const response = await axios.post("/logout");

            getUser();
        } catch (error) {}
    };

    return (
        <div>
            <span className="header__logout" onClick={handleLogout}>
                Logout
            </span>
        </div>
    );
};

export default Logout;
