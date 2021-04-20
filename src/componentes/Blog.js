import React from 'react';
import {Link} from 'react-router-dom';
import posts from './../data/post';
import Controles from './Controles'
const Blog = () => {
    return ( 
        <div>
            <h2>Blog</h2>
            <ul>
                {posts.map((post)=>{
                    return ( <li 
                                key={post.id}>
                                <Link to={`/post/${post.id}`}>
                                    {post.titulo}
                                </Link>
                            </li>
                    )
                })}
            </ul>
            <Controles />
        </div>
    )
}
 
export default Blog;