import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    let auth = localStorage.getItem('user');
    auth = JSON.parse(auth);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/signup");
    }


    return (
        <div className="nav">
            <img className="logo" src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg" alt="Logo img"/>
            {
                auth ?<ul className="nav-ul">

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link onClick={logout} to="/signup">Log Out</Link></li>
                </ul>:

                    <ul className="nav-ul nav-right float-left">
                        <li><Link to="/signup">Sign Up/ Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }

        </div>
    )
}

export default Nav;