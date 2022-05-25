import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <h2>Navbar {this.props.name}</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/search">Search for book</Link>
                </li>
                <li>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
        </div>
    );
}