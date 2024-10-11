import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file for styles
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Student');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Role:', role);
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
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
                <div className="login-link">
                <p>Dont't have an account? <Link to="/signup">Signup here</Link></p>
            </div>
                <button type="submit" className="submit-button">Log In</button>
            </form>
            
        </div>
    );
};

export default LoginForm;