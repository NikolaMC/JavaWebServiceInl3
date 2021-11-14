import React, { useContext, useEffect, useState } from "react";
import { ApplicationContext } from "../../../providers/AuthProvider";
import Post from "../public/Post";
import CreatePostForm from "./CreatePostForm";

const PostsPrivate = () => {
    const { globalUserToken, globalUsername } = useContext(ApplicationContext);
    const [createdPost, setCreatedPost] = useState({
        title: "",
        content: "",
        name: globalUsername
    });
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        getPosts();
    }, []);

    const handleChangeInput = (e) => {
        setCreatedPost({ ...createdPost, [e.target.name]: e.target.value, name: globalUsername });
    }

    const createPost = async (e) => {
        e.preventDefault();
        if (createdPost.title !== "" && createdPost.content !== "") {
            const res = await fetch("/post/create", {
                method: "POST",
                body: JSON.stringify(createdPost),
                headers: {
                    "Content-Type": "application/json",
                    token: globalUserToken
                }
            });
            if (res.status === 201) {
                setMessage("Successfully posted");
            }
            getPosts();
        } else {
            setMessage("Title and content can not be empty");
        }
    }

    const getPosts = async () => {
        const res = await fetch("/post/all", {
            method: "GET"
        });
        const data = await res.json();
        setPosts(data);
    }

    return (
        <div>
            <p>{message}</p>
            <CreatePostForm createPost={createPost} handleChangeInput={handleChangeInput} />
            <h2>Posts</h2>
            {
                posts.map((post, i) => (
                    <Post key={i} post={post} />
                ))
            }
        </div>
    )

}

export default PostsPrivate;