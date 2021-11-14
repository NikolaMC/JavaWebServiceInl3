import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = () => {
    let history = useHistory();

    const loginButton = () => {
        history.push("/home");
    }

    return (
        <div style={{ position: "fixed", top: "10px", right: "10px"}}>
            <button onClick={loginButton}>Log in/Register</button>
        </div>
    )

}

export default Navbar;