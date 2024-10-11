import React, { useState } from 'react';
import './SignupForm.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const SignupForm = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Full Name:', fullName);
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Role:', role);
        console.log('Profile Image:', image);
    };

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Create New Account</h2>
            <form onSubmit={handleSubmit} className="form-grid">
                <div className="form-group">
                    <label className="form-label">Full Name:</label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Role:</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="form-input">
                        <option value="Student">Student</option>
                        <option value="Faculty Member">Faculty Member</option>
                        <option value="Administrator">Administrator</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Profile Image:</label>
                    <input type="file" onChange={handleImageUpload} className="form-input" />
                </div>
               
                <div className="form-group full-width">
                    <button type="submit" className="submit-button">Sign Up</button>
                </div>
            </form>
            <div className="login-link">
                <p>Already have an account? <Link to="/">Log in here</Link></p>
            </div>
            
        </div>
    );
};

export default SignupForm;