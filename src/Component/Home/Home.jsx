import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import './home.css'
const Home = () => {
    const navigation = useNavigation();
    return (
        <div className='home'>
            <Header></Header>
            <div className='loading'>{navigation.state === 'loading' && 'cooking data for you.....' }</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;