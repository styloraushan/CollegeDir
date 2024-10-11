// UpdateProfile.js
import React, { useState } from 'react';
import './UpdateProfile.css';

const UpdateProfile = () => {
    const [officeHours, setOfficeHours] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = {
            officeHours,
            email,
            phone,
        };

        const response = await fetch('/api/update-profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProfile),
        });

        if (response.ok) {
            alert('Profile updated successfully!');
        } else {
            alert('Failed to update profile.');
        }
    };

    return (
        <div className="update-profile-container">
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit} className="update-form">
                <div className="form-group">
                    <label>Office Hours:</label>
                    <input
                        type="text"
                        value={officeHours}
                        onChange={(e) => setOfficeHours(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Contact Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <button type="submit" className="update-button">Update Profile</button>
            </form>
        </div>
    );
};

export default UpdateProfile;