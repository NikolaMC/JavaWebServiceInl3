import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {
        const res = await fetch("/post/all", {
            method: "GET"
        });
        const data = await res.json();
        setPosts(data);
    }

    return (
        <div>
            <h2>Posts</h2>
            {
                posts.map((post, i) => (
                    <Post key={i} post={post} />
                ))
            }
        </div>
    )
}

export default Posts;