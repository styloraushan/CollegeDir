// Attendance.jsx
import React, { useState, useEffect } from 'react';
import './Attendance.css'; // Import CSS for styling

const Attendance = () => {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});

    useEffect(() => {
        // Simulate fetching student data; replace with your API call
        const fetchStudents = async () => {
            const data = [
                {
                    id: 1,
                    name: 'Raushan Kumar',
                    email: 'raushan.kumar@university.edu',
                    photo: 'https://via.placeholder.com/50' // Placeholder image URL
                },
                {
                    id: 2,
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    photo: 'https://via.placeholder.com/50' // Placeholder image URL
                },
                // Add more student objects as needed
            ];
            setStudents(data);
            // Initialize attendance state
            const initialAttendance = data.reduce((acc, student) => {
                acc[student.id] = 'present'; // Default all students to present
                return acc;
            }, {});
            setAttendance(initialAttendance);
        };

        fetchStudents();
    }, []);

    const handleAttendanceChange = (studentId, status) => {
        setAttendance((prev) => ({
            ...prev,
            [studentId]: status,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send attendance data to your API
        const response = await fetch('/api/take-attendance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(attendance),
        });

        if (response.ok) {
            alert('Attendance recorded successfully!');
        } else {
            alert('Failed to record attendance.');
        }
    };

    return (
        <div className="attendance-container">
            <h2>Take Attendance</h2>
            <form onSubmit={handleSubmit} className="attendance-form">
                {students.map((student) => (
                    <div key={student.id} className="attendance-card">
                        <img src={student.photo} alt={student.name} className="student-photo" />
                        <div className="student-info">
                            <h3>{student.name}</h3>
                            <p>{student.email}</p>
                        </div>
                        <div className="attendance-buttons">
                            <button
                                type="button"
                                className={`attendance-button present ${attendance[student.id] === 'present' ? 'active' : ''}`}
                                onClick={() => handleAttendanceChange(student.id, 'present')}
                            >
                                Present
                            </button>
                            <button
                                type="button"
                                className={`attendance-button absent ${attendance[student.id] === 'absent' ? 'active' : ''}`}
                                onClick={() => handleAttendanceChange(student.id, 'absent')}
                            >
                                Absent
                            </button>
                        </div>
                    </div>
                ))}
                <button type="submit" className="submit-attendance-button">Submit Attendance</button>
            </form>
        </div>
    );
};

export default Attendance;