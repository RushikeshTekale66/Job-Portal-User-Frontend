import React, { useEffect } from 'react';

const Profile = () => {
    let username = localStorage.getItem('user');
    username = JSON.parse(username);


    return (
        <div className="container my-5">
            <div className="card shadow p-4">
                <h1 className="mb-3 text-primary">Your Profile</h1>
                <p className="mb-4">
                    Welcome, <strong className="text-success">{username.name}!</strong><br />
                    You can find your dream job from here...
                </p>

                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div className="col">
                        <p><strong>Name:</strong> {username.name}</p>
                    </div>
                    <div className="col">
                        <p><strong>Email:</strong> {username.email}</p>
                    </div>
                    <div className="col">
                        <p><strong>Mobile:</strong> {username.mobile}</p>
                    </div>
                    <div className="col">
                        <p><strong>Gender:</strong> {username.gender}</p>
                    </div>
                    <div className="col">
                        <p><strong>Date of Birth:</strong> {
                            String(new Date(username.dob).getDate()).padStart(2, '0') + '-' +
                            String(new Date(username.dob).getMonth() + 1).padStart(2, '0') + '-' +
                            new Date(username.dob).getFullYear()
                        }</p>
                    </div>
                    <div className="col">
                        <p><strong>Address:</strong> {username.address}</p>
                    </div>
                    <div className="col">
                        <p><strong>Education:</strong> {username.education}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;