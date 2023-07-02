import React, { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts")
            .then(res => {
                setPosts(res.data);
            });
    }, [posts]);

    return (
        <div className="blog">
            <h1>My Blogs</h1>
            <p>I like to write somethings down. They might be informative, poetic or just thoughts. So here are some things I Wrote. </p>
            <a href="/compose" class="btn btn-primary btn-lg compose">Compose</a>
            <hr />

            {posts.toReversed().map((post, index) => {
                return (
                    <div key={index} className="post">
                        <h1 className="post-title">{post.title}</h1>
                        <p className="post-content">
                        {post.content.substring(0, 100) + " ..."} <a href={"/posts/"+post._id}>Read More</a>
                        </p>
                        <hr/>
                    </div>

                )
            })}

        </div>

    )
}

export default Blog;