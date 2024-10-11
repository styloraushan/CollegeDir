// ClassList.js
import React, { useEffect, useState } from 'react';
import './ClassList.css';

const ClassList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Simulated initial data
        const fetchClassList = async () => {
            const data = [
                {
                    id: 1,
                    name: 'Raushan Kumar',
                    photoUrl: 'https://avatars.githubusercontent.com/u/142259385?v=4',
                    email: 'raushan.kumar@university.edu',
                    phone: '8825201911',
                },
                {
                    id: 1,
                    name: 'Raushan Kumar',
                    photoUrl: 'https://avatars.githubusercontent.com/u/142259385?v=4',
                    email: 'raushanmansagar12345@gmail.com',
                    phone: '8825201911',
                },
                // Add more students as needed
            ];
            setStudents(data);
        };

        fetchClassList();
    }, []);

    const removeStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <div className="class-list-container">
            <h2>Class List</h2>
            <table className="class-list-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Photo</th>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Action</th> {/* Column for Remove */}
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={student.photoUrl} alt={student.name} className="student-photo" />
                            </td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>
                                <button onClick={() => removeStudent(student.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassList;