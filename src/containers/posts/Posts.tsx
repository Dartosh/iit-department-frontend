import { Component } from "react";

import axios from "axios";

import './Posts.css';


const BASE_PATH = 'http://127.0.0.1:8000/auth/jwt/create/';

class Posts extends Component {
    state = {
        result: {},
    }

    componentDidMount() {
        axios({
            method: 'post',
            url: BASE_PATH,
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            data: {
                "username": "admin",
                "password": "admin"
            }
        })
            .then(res => this.setPosts(res))
            .catch(error => console.log(error));
    }

    setPosts = ( result: any ): void => {
        const { data } = result;
        const { access } = data;

        axios.get("http://127.0.0.1:8000/api/v1/wall/1", {
            headers: {
                "accept": "application/json",
                Authorization: `JWT ${access}`
            }
        })
            .then(result => this.setState({
                result: result,
            }))
            .catch(error => console.log(error));

    }


    render() {
        const { result } = this.state;
        const { data = [] }: any = result;
        console.log(data);
        return(
            <main>
                <h3>POSTS</h3>
                {data.map(({ id, create_date, user, text, comments_count }: any) => (
                    <article className="post">
                        <h4>{id}</h4>
                        <p>{text}</p>
                        <div className="post__info">
                            <span>{create_date}</span>
                            <span>{user}</span>
                        </div>
                    </article>
                ))}
            </main>
        )
    }
}

export default Posts;