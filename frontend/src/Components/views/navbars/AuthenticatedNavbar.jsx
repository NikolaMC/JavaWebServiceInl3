import React, { useContext } from "react";
import { useHistory } from "react-router";
import { ApplicationContext } from "../../providers/AuthProvider";

const AuthenticatedNavbar = () => {
    const { setAuthenticated, setGlobalUserToken, globalUserToken, setGlobalUsername } = useContext(ApplicationContext);
    let history = useHistory();

    const logoutButton = async () => {
        const res = await fetch("/user/logout", {
            method: "POST",
            headers: { token: globalUserToken }
        });
        if (res.status === 200) {
            setGlobalUsername("");
            setGlobalUserToken("");
            setAuthenticated(false);
            history.push("/");
        }
    }

    const usersPostsButton = () => {
        history.push("/user-posts");
    }

    return (
        <div>
            <button style={{ position: "fixed", top: "10px", right: "10px" }} onClick={logoutButton} >Log out</button>
            <button style={{ position: "fixed", top: "10px", right: "75px" }} onClick={usersPostsButton} >Look at your posts</button>
        </div>
    )

}

export default AuthenticatedNavbar;