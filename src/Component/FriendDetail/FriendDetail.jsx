import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    const {name, website, phone, email, company } = friend;
    // console.log(friend)
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(-1);
    }
    return (
        <div className='div'>
            <h3>Everything about this person is here</h3>
            <h4>Name: {name}</h4>
            <p>Website:{website} </p>
            <p>Phone: {phone} </p>
            <p>email: {email}</p>
            <p>Company: {company.name}</p>
            <button onClick={()=>handleClick()}>Go Back</button>
        </div>
    );
};

export default FriendDetail;