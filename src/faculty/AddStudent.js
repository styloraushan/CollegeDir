// AddStudent.js
import React, { useState } from 'react';
import './AddStudent.css';

const AddStudent = () => {
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newStudent = {
            name,
            photoUrl,
            email,
            phone,
        };

        // Replace with your API call to add the student
        const response = await fetch('/api/add-student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
        });

        if (response.ok) {
            alert('Student added successfully!');
            // Clear form fields after successful submission
            setName('');
            setPhotoUrl('');
            setEmail('');
            setPhone('');
        } else {
            alert('Failed to add student.');
        }
    };

    return (
        <div className="add-student-container">
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit} className="add-student-form">
                <div className="form-group">
                    <label>Student Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Photo URL:</label>
                    <input
                        type="url"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        required
                        className="form-input"
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
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
                <button type="submit" className="add-button">Add Student</button>
            </form>
        </div>
    );
};

export default AddStudent;