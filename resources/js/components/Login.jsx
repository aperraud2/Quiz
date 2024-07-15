import React, { useState, useEffect, useContext } from "react";
import UserContext from "./UserContext";
import axios from "axios";

export default function Login({ onSuccess, onError }) {
    const { getUser } = useContext(UserContext);

    const [values, setValues] = useState({
        name: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("/login", values);

            const response_data = response.data;

            getUser();
            onSuccess("Login successful!"); 
        } catch (error) {
            let message = "An error occurred.";
            if (error.response) {
                switch (error.response.status) {
                    case 422:
                        message = "Validation failed: " + JSON.stringify(error.response.data.errors.name);
                        break;
                    case 500:
                        message = "Unknown error: " + error.response.data;
                        break;
                    default:
                        message = error.response.data;
                        break;
                }
            }
            onError(message); 
        }
    };

    const handleChange = (event) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <form action="/login" method="post" onSubmit={handleSubmit}>
            <div className="popup__fields">
                <label>Username</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />

                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />

                <button>Login</button>
            </div>
        </form>
    );
}
