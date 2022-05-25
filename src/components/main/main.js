import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../navbar/navbar"
import { Favorites } from "../favorites/favorites";
import { Search } from "../search/search";
import { Home } from "../home/home";



export const Main = () => {
    return (
        <div className="main">
            <Navbar name="list" />
            <Routes>
                <Route path='/search/' component={<Search name="search"/>} />
                <Route path='/favorites' component={<Favorites name="favorites"/>} />
                <Route path='/' component={<Home name="home"/>} />
            </Routes>
        </div>
    );
}