import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    let auth = localStorage.getItem('user');
    auth = JSON.parse(auth);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    }


    return (
        <nav className="navbar fixed-top  navbar-expand-lg navbar-light bg-light shadow px-4 mb-5">
            <Link className="navbar-brand" to="/home">
                <img
                    src="https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
                    alt="Logo"
                    height="40"
                    className="me-2"
                />
                Job Portal
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    {auth ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-danger" to="/login" onClick={logout}>
                                    Log Out
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Sign Up / Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>

    )
}

export default Nav;