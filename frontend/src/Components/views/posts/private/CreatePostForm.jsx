import React from "react";

const CreatePostForm = ({ createPost, handleChangeInput }) => {
    return (
        <form onSubmit={createPost}>
            <input type="text" name="title" placeholder="Post title" onChange={handleChangeInput} /><br/>
            <textarea style={{height: "150px"}} name="content" placeholder="Post content" onChange={handleChangeInput} /><br/>
            <button type="submit">Create post</button>
        </form>
    )
}

export default CreatePostForm;