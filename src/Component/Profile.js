import React, { useEffect } from 'react';

const Profile = () => {
    let username = localStorage.getItem('user');
    username = JSON.parse(username);


    return (
        <div>
            <div className='profile'>
                <h1>Your Profile</h1>
                <p>Welcome, <b className='text-primary'>{username.name}!</b> <br></br> You can get your dreem job form here...</p>
                <div className='profile-detail'>
                    <p>Name : <b>{username.name}</b></p>
                    <p>Email : <b>{username.email}</b></p>
                    <p>Mobile: <b>{username.mobile}</b></p>
                    <p>Gender: <b>{username.gender}</b></p>
                    <p>Date of Birth: <b>{String(new Date(username.dob).getDate()).padStart(2, '0')}-
                        {String(new Date(username.dob).getMonth() + 1).padStart(2, '0')}-
                        {new Date(username.dob).getFullYear()}</b></p>
                    <p>Address: <b>{username.address}</b></p>
                    <p>Education: <b>{username.education}</b></p>
                </div>

            </div>

        </div>
    )
}

export default Profile;