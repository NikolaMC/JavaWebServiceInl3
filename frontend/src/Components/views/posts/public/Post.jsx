import React from "react"

const Post = ({post}) => {
    return (
        <div>
            <h3>{post.title} - User: {post.name}</h3>
            <p>{post.content}</p>
        </div>
    )
}

export default Post;