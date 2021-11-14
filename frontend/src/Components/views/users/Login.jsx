import React from "react";
import { useState, useContext } from "react";
import { ApplicationContext } from "../../providers/AuthProvider";
import { useHistory } from "react-router-dom";

const Login = ({ setMessage }) => {

    const [user, setUser] = useState({name: "", password: ""});

    const handleChangeInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const { setAuthenticated, setGlobalUserToken, setGlobalUsername } = useContext(ApplicationContext);

    let history = useHistory();

    const loginUser = async (e) => {
        e.preventDefault();
        if (user.name !== "" && user.password !== "") {
            const res = await fetch("/user/login", {
                method: "POST",
                body: JSON.stringify(user),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            if (res.status !== 200) {
                console.log("Wrong username or password");
            }
    
            if (res.status !== 406 && res.status === 200) {
                const data = await res.text();
                console.log(user);
                console.log(data);
                setGlobalUserToken(data);
                setAuthenticated(true);
                setGlobalUsername(user.name);
                history.push("/posts");
            }
        } else {
            setMessage("Username and password fields can't be empty")
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loginUser}>
                <input type="text" name="name" value={user.name} placeholder="Username" onChange={handleChangeInput} />
                <input type="text" name="password" value={user.password} placeholder="Password" onChange={handleChangeInput} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;