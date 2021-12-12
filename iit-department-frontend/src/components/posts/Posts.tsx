import React, { Component } from "react";
import './Posts.css';
import axios from "axios";

const HEROKU_APP = 'https://cors-anywhere.herokuapp.com/';
const BASE_PATH = 'http://127.0.0.1:8000/auth/jwt/create/';
const SEARCH_PATH = '/search';
const SEARCH_PARAM = 'query=';



class Posts extends Component<any, any> {
    state = {
        searchQuery: '',
        result: {},
    }



    componentDidMount() {
        const { searchQuery } = this.state;

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

        axios.get("http://127.0.0.1:8000/api/v1/feed/", {
            headers: {
                "accept": "application/json",
                "Authorization": `Bearer ${access}`
            }
        })

        //this.setState({ result });
    }


    render() {
        const { searchQuery, result } = this.state;
        const { hits = [] }: any = result;

        return(
            <main>
                <h3>POSTS</h3>
                {hits.map(({ id, create_date, user, text, comments_count }: any) => (
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