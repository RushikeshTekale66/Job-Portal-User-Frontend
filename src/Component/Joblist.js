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
        <div className="">

            <div className="fixed-top search-bar" >
                <h4 className="font-monospace">Hey <strong className="text-primary"> {auth.name}</strong><br></br>You dream Job is here...</h4>

                <input className="search-product-box" type="text" placeholder="Search product" onChange={searchHandle} /><br></br>
            </div>



            {/* <ul>
                <li><strong>Sr.no</strong></li>
                <li><strong>Position</strong></li>
                <li><strong>Skills</strong></li>
                <li><strong>Salary</strong></li>
                <li><strong>Company</strong></li>
                <li><strong>company Description</strong></li>
                <li><strong>Job Expiry</strong></li>
                <li><strong>Apply Link</strong></li>
            </ul>

            {
                jobs.length > 0 ? jobs.map((item, index) =>
                    <ul key={item._id}>
                        <li>{index + 1}</li>
                        <li>{item.position}</li>
                        <li>{item.skills}</li>
                        <li>${item.salary}</li>
                        <li>{item.company}</li>
                        <li>{item.companyDescription}</li>
                        <li>{item.date}</li>
                        <li><Link to={item.applyLink} target="_blank">Apply</Link></li>
                    </ul>
                )
                    : <h1>No Record Found!</h1>
            } */}

            {/* <h1>Job Items</h1> */}

            <div className="product">

            {
                jobs.length > 0 ? jobs.map((item, index) =>
                    <ul className="container col-6" key={item._id}>
                        <div className="g-col-6">
                            <p className="text-center fs-4 text-primary"><strong>{item.position}</strong></p>
                            <company><strong className="">Company: </strong>{item.company}</company><br></br>
                            <company><strong className="">Company Description: </strong>{item.companyDescription}</company><br></br>
                            <salary><strong className="">Salary: </strong>{item.salary}</salary><br></br>
                            <skills><strong className="">Skills: </strong>{item.skills}</skills><br></br>
                            <date><strong className="text-danger">Expiry: </strong>
                                {new Date(item.date).getFullYear()}-
                                {String(new Date(item.date).getMonth() + 1).padStart(2, '0')}-
                                {String(new Date(item.date).getDate()).padStart(2, '0')}
                            </date><br></br>
                            <Link className="btn btn-success float-left" to={item.applyLink} target="_blank">Apply Now</Link>
                        </div>
                    </ul>
                )
                    : <h1>No Record Found!</h1>
            }
            </div>



        </div >
    )
}

export default JobList;