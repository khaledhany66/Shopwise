import { Outlet } from 'react-router-dom';
import Footer from './Footer'
import NavBar from './NavBar';
import React from 'react';
import Home from './Home'

function Main() {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet />

            <Footer></Footer>
        </div>
    );
}

export default Main;
