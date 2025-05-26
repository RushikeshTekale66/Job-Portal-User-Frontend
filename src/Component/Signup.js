import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState("");
    const [education, setEducation] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch("http://localhost:9000/userregister", {
            method: 'post',
            body: JSON.stringify({ name, email, mobile, gender, dob, address, education, password }),
            headers: {
                'content-Type': 'application/json'
            },
        });
        result = await result.json();
        localStorage.setItem("user", JSON.stringify(result));
        console.log(result);
        if (result) {
            navigate('/home')
        }
    }

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/home');
        }
    })

    return (
        <div className="container my-5">
            <div className="card shadow p-4 col-lg-8 mx-auto">
                <h2 className="text-center mb-4 text-primary">User Registration</h2>

                <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Name"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Mobile:</label>
                    <input
                        type="number"
                        className="form-control"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="Enter Mobile Number"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Gender:</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="gender"
                                value="Male"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="radio"
                                className="form-check-input"
                                name="gender"
                                value="Female"
                                onChange={(e) => setGender(e.target.value)}
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Date of Birth:</label>
                    <input
                        type="date"
                        className="form-control"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Higher Education:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        placeholder="Enter Education Details"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                </div>

                <div className="d-grid">
                    <button className="btn btn-success" type="button" onClick={collectData}>
                        Sign Up
                    </button>
                </div>
            </div>
        </div>

    )

}

export default Signup;