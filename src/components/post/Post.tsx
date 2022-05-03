import React, { Component } from "react";
import './Post.css';

type propsPost = {
    id: string,
    create_date: string,
    user: string,
    text: string,
    comments_count: string,
}

const Post: React.FC<propsPost> = () => {
    return(
        <main>
            <h3>POST</h3>
        </main>
    )
}

export default Post;