import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './PostDetails.css'
const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, userId, body} = post;
    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1);
    }
    return (
        <div className='div'>
            <h2>Details of post : <span className='id'>{id}</span></h2>
            <p><strong>User ID:</strong> <span className='id'>{userId}</span></p>
            <h3 className='title'>{title}</h3>
            <p><small>{body}</small></p>
            <button onClick={()=>handleGoBack()}>Go Back</button>
        </div>
    );
};

export default PostDetails;