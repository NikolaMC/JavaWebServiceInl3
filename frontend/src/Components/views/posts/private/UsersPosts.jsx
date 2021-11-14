import React, { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../providers/AuthProvider";
import Post from "../public/Post";

const UsersPosts = () => {
    const { globalUsername, globalUserToken } = useContext(ApplicationContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getUsersPosts();
    }, []);

    const getUsersPosts = async () => {
        const res = await fetch("/post/user-posts", {
            method: "GET",
            headers: {
                token: globalUserToken
            }
        });
        const data = await res.json();
        setPosts(data);
    }

    const deletePost = async (title) => {
        await fetch(`/post/delete/${globalUsername}/${title}`, {
            method: "DELETE",
            headers: {
                token: globalUserToken
            }
        });
        getUsersPosts();
    }

    return (
        <div>
            {
                posts.map((post, i) => (
                    <div key={i} >
                        <Post post={post} />
                        <button onClick={() => deletePost(post.title)}>Delete post</button>
                    </div>
                ))
            }
        </div>
    )
}

export default UsersPosts;