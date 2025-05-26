import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark fixed-bottom text-light mt-5 mb-0 p-3">
            <div className="container text-center">
                <p className="mb-1">
                    &copy; {new Date().getFullYear()} <span className="text-warning">@rushi</span>. All rights reserved.
                </p>
            </div>
        </footer>

    )
}

export default Footer;