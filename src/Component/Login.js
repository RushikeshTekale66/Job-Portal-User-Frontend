import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    let generateCaptcha = () => {
        const characters = '0123456789';
        const captchaLength = 4; // You can adjust the CAPTCHA length

        let captcha = '';
        for (let i = 0; i < captchaLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            captcha += characters[randomIndex];
        }

        document.getElementById('captchaImage').textContent = captcha;
        const captcha2 = captcha;
    }


    function validateCaptcha() {
        const userCaptcha = document.getElementById('userCaptcha').value;
        const generatedCaptcha = document.getElementById('captchaImage').textContent;

        if (userCaptcha === generatedCaptcha) {
            navigate('/');
        } else {
            generateCaptcha();
            alert("Enter correct capcha")
        }
    }

    const handleLogin = async () => {
        console.log("Email & Password are ", email, password);
        let result = await fetch('http://localhost:9000/userlogin',
            {
                method: 'post',
                body: JSON.stringify({ email, password }),
                headers: {
                    'content-type': 'application/json'
                }
            });

        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem('user', JSON.stringify(result));
            validateCaptcha();
            // navigate('/');
        }
        else { alert("Enter valid login credentials"); }
    }


    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         validateCaptcha();
    //         navigate('/');
    //     }
    // })

    return (
        <div className="container my-5">
            <div className="card p-4 col-md-6 mx-auto shadow">
                <h2 className="text-center text-primary mb-4">Employee Login</h2>

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
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Captcha:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userCaptcha"
                        name="userCaptcha"
                        placeholder="Enter Captcha"
                    />
                    <div className="d-flex align-items-center justify-content-between mt-2">
                        <span id="captchaImage" className="fs-5 fw-bold text-primary"></span>
                        <button
                            type="button"
                            className="btn btn-outline-success btn-sm"
                            onClick={generateCaptcha}
                        >
                            Generate Captcha
                        </button>
                    </div>
                </div>

                <div className="d-grid mt-4">
                    <button className="btn btn-primary" type="button" onClick={handleLogin}>
                        Submit
                    </button>
                </div>
            </div>
        </div>

    )
}


export default Login;