import React from 'react';
import './post.css'
import { Link, useNavigate } from 'react-router-dom';
const Post = ({post}) => {
    const {id, title} =post;
    const navigate = useNavigate();
    const navigateToDetails= () =>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h4>ID: {id}</h4>
            <p><strong>Title: <span className='title'>{title}</span></strong></p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show Post Details</button></Link>
            <button onClick={()=>navigateToDetails()}>ShowDetailsUsingNaigate</button>
        </div>
    );
};

export default Post;