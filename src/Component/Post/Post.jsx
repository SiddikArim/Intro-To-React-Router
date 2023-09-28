import React from 'react';
import './post.css'
import { Link } from 'react-router-dom';
const Post = ({post}) => {
    const {id, title} =post;
    return (
        <div className='post'>
            <h4>ID: {id}</h4>
            <p><strong>Title: {title}</strong></p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button>Show Post Details</button>
        </div>
    );
};

export default Post;