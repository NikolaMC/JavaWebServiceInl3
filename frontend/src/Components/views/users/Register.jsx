import React from "react";
import { useState } from "react";

const Register = ({ setMessage }) => {

    const [user, setUser] = useState({name: "", password: ""});

    const handleChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const registerUser = async (e) => {
        e.preventDefault();
        if (user.name !== "" && user.password !== "") {
            const res = await fetch("/user/register", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.text();
            setMessage(data);
            setUser({name: "", password: ""});
        } else {
            setMessage("Username and password fields can't be empty");
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={registerUser}>
                <input type="text" name="name" value={user.name} placeholder="Username" onChange={handleChangeInput} />
                <input type="text" name="password" value={user.password} placeholder="Password" onChange={handleChangeInput} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;