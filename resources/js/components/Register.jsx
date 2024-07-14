import React, { useState, useEffect } from "react";

export default function Register(props) {
    const [values, setValues] = useState({
        email: "",
        name: "",
        password: "",
        password_confirmation: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/register", {
            method: "POST",

            body: JSON.stringify(values),

            headers: {
                Accept: "application/json",

                "Content-type": "application/json",

                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
        });

        const response_data = await response.json();

        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    console.log("VALIDATION FAILED:", response_data.errors);

                    break;

                default:
                    console.log("UNKNOWN ERROR", response_data);

                    break;
            }
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
        <form action="/register" method="post" onSubmit={handleSubmit}>
            <div className="popup__fields">
                <label>Username</label>
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                />
                <label>Password</label>
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                />
                <label>Password confirmation</label>
                <input
                    type="password"
                    name="password_confirmation"
                    value={values.password_confirmation}
                    onChange={handleChange}
                />

                <button>Register</button>
            </div>
        </form>
    );
}
