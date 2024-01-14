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
            navigate('/')
        }
    }

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    })

    return (
        <div className="register">
            <h2>User Register </h2>

            <label for="userCaptcha">Name: </label>
            <input className="inputbox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

            <label for="userCaptcha">Email: </label>
            <input className="inputbox" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

            <label for="userCaptcha">Mobile: </label>
            <input className="inputbox" type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile" />

            <label for="userCaptcha">Gender: </label>
            <div className="inputbox">
                <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male <br></br>
                <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
            </div>

            <label for="userCaptcha">Date of Birth: </label>
            <input className="inputbox" type="date" value={dob} onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" />

            <label for="userCaptcha">Address: </label>
            <input className="inputbox" type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter full address" />

            <label for="userCaptcha">Higher Education: </label>
            <input className="inputbox" type="text" value={education} onChange={(e) => setEducation(e.target.value)} placeholder="Enter Education Details" />

            <label for="userCaptcha">Password: </label>
            <input className="inputbox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <button className="appbutton" type="button" onClick={collectData}>Signup</button>
        </div>
    )

}

export default Signup;