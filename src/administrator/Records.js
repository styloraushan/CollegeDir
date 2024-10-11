import React, { useState, useEffect } from 'react';
import './ManageStudentAndFacultyRecords.css'; // Create this CSS file for styling

const Records = () => {
    const [students, setStudents] = useState([]);
    const [faculty, setFaculty] = useState([]);

    useEffect(() => {
        // Fetch initial data (replace with your API call)
        const fetchData = async () => {
            const studentData = [
                {
                    id: 1,
                    name: 'Raushan Kumar',
                    email: 'raushan.kumar@university.edu',
                    phone: '1234567890',
                    username: 'raushan.k',
                    password: 'password123', // Placeholder for password
                    image: 'https://avatars.githubusercontent.com/u/142259385?s=400&u=b4e5237ed879a69258e3c05ddebc7a7ecfe3e0fc&v=4', // Placeholder for image path
                },
                {
                    id: 2,
                    name: 'John Doe',
                    email: 'john.doe@example.com',
                    phone: '0987654321',
                    username: 'john.d',
                    password: 'password456',
                    image: 'https://avatars.githubusercontent.com/u/142259385?s=400&u=b4e5237ed879a69258e3c05ddebc7a7ecfe3e0fc&v=4',
                },
            ];
            const facultyData = [
                {
                    id: 1,
                    name: 'Dr. Smith',
                    email: 'dr.smith@university.edu',
                    phone: '1122334455',
                    username: 'dr.smith',
                    password: 'faculty123', // Placeholder for password
                    image: 'https://avatars.githubusercontent.com/u/142259385?s=400&u=b4e5237ed879a69258e3c05ddebc7a7ecfe3e0fc&v=4',
                },
                {
                    id: 2,
                    name: 'Prof. Johnson',
                    email: 'prof.johnson@university.edu',
                    phone: '5566778899',
                    username: 'prof.j',
                    password: 'faculty456',
                    image: 'https://avatars.githubusercontent.com/u/142259385?s=400&u=b4e5237ed879a69258e3c05ddebc7a7ecfe3e0fc&v=4',
                },
            ];
            setStudents(studentData);
            setFaculty(facultyData);
        };
        fetchData();
    }, []);

   

    return (
        <div className="manage-records-container">
            <h2> Student and Faculty Records</h2>
        
            <div className="record-list">
                <h3>Students</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td><img src={student.image} alt={student.name} className="record-image" /></td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.username}</td>
                                <td>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h3>Faculty</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faculty.map((member) => (
                            <tr key={member.id}>
                                <td><img src={member.image} alt={member.name} className="record-image" /></td>
                                <td>{member.name}</td>
                                <td>{member.email}</td>
                                <td>{member.phone}</td>
                                <td>{member.username}</td>
                                <td>
                                    <button className="delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Records;