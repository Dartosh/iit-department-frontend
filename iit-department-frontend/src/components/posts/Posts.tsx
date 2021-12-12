import React, { Component } from "react";
import './Posts.css';

class Posts extends Component<any, any> {
    render() {
        const posts: number[] = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ;

        return(
            <main>
                <h3>POSTS</h3>
                {posts.map(({ numb, index }: any) => (
                    <article className="post">
                        <h4>Title</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, ipsum?</p>
                        <div className="post__info">
                            <span>Created at</span>
                            <span>Author</span>
                        </div>
                    </article>
                ))}

            </main>
        )
    }
}

export default Posts;