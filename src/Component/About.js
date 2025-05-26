import React from "react";

const About = () => {
    return (
        <div className="container my-5">
            <div className="about bg-light p-4 rounded shadow-sm">
                <h1 className="mb-4 text-primary">About</h1>
                <p>
                    This is a React.js application that uses technologies like <strong>React.js, Node.js, Express.js, and MongoDB</strong>.
                </p>
                <p>
                    We’ve created a database that stores information about users and jobs. A user must first register, then log in to apply for jobs on our portal.
                </p>
                <p>
                    The application includes a backend job management system where you can add jobs, update existing ones, and delete expired jobs — performing full CRUD operations. It also includes a search function to find jobs in the database.
                </p>
            </div>
        </div>

    )
}

export default About;