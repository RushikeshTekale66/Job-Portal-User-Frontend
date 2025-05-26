import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    let auth = localStorage.getItem('user');
    auth = JSON.parse(auth);


    const getJobs = async () => {
        let result = await fetch('http://localhost:9000/jobs');
        // result = await result.json();
        result = await result.json();
        setJobs(result);
    }

    useEffect(() => {
        getJobs();
    }, [])


    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:9000/search/${key}`);
            result = await result.json();
            if (result) {
                setJobs(result);
            }
        }
        else getJobs();
    }

    return (
        <div className="container px-3 mt-5">

            {/* Search Bar Section */}
            <div className="bg-light shadow-sm py-3 px-4">
                <h4 className="font-monospace mb-2">
                    Hey <strong className="text-primary">{auth.name}</strong><br />
                    Your dream job is here...
                </h4>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search job title or company"
                    onChange={searchHandle}
                />
            </div>


            {/* Job Listings */}
            <div className="row justify-content-center">
                {jobs.length > 0 ? (
                    jobs.map((item) => (
                        <div className="col-md-6 mb-4" key={item._id}>
                            <div className="card shadow-sm p-4">
                                <h5 className="text-primary text-center mb-3">
                                    <strong>{item.position}</strong>
                                </h5>
                                <p><strong>Company:</strong> {item.company}</p>
                                <p><strong>Description:</strong> {item.companyDescription}</p>
                                <p><strong>Salary:</strong> {item.salary}</p>
                                <p><strong>Skills:</strong> {item.skills}</p>
                                <p className="text-danger">
                                    <strong>Expiry:</strong>{' '}
                                    {new Date(item.date).getFullYear()}-
                                    {String(new Date(item.date).getMonth() + 1).padStart(2, '0')}-
                                    {String(new Date(item.date).getDate()).padStart(2, '0')}
                                </p>
                                <a
                                    className="btn btn-success mt-2"
                                    href={item.applyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2 className="text-center text-muted mt-5">No Record Found!</h2>
                )}
            </div>
        </div>

    )
}

export default JobList;