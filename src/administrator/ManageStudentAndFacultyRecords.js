import React, { useState, useEffect } from 'react';
import './ManageStudentAndFacultyRecords.css'; // Create this CSS file for styling

const ManageStudentAndFacultyRecords = () => {
    const [students, setStudents] = useState([]);
    const [faculty, setFaculty] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); // Password state
    const [role, setRole] = useState('Student'); // Role state, default is Student

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
                    image: 'image2.jpg',
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
                    image: 'faculty1.jpg',
                },
                {
                    id: 2,
                    name: 'Prof. Johnson',
                    email: 'prof.johnson@university.edu',
                    phone: '5566778899',
                    username: 'prof.j',
                    password: 'faculty456',
                    image: 'faculty2.jpg',
                },
            ];
            setStudents(studentData);
            setFaculty(facultyData);
        };
        fetchData();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement add/update functionality
        const newRecord = {
            id: role === 'Student' ? students.length + 1 : faculty.length + 1, // Sample id logic
            name,
            image,
            email,
            phone,
            username,
            password, // Include password in the new record
            role, // Use selected role from dropdown
        };
        if (role === 'Student') {
            setStudents((prev) => [...prev, newRecord]);
        } else {
            setFaculty((prev) => [...prev, newRecord]);
        }
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setImage('');
        setEmail('');
        setPhone('');
        setUsername('');
        setPassword(''); // Reset password field
        setRole('Student'); // Reset role to default
    };

    return (
        <div className="manage-records-container">
            <h2>Manage Student and Faculty Records</h2>
            <form onSubmit={handleSubmit} className="record-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="Role">Role</option>
                        <option value="Student">Student</option>
                        <option value="Faculty">Faculty</option>
                    </select>
                </label>
                <button type="submit" className="submit-button">Add/Update Record</button>
            </form>

            <div className="record-list">
                <h3>Recently Addedd Students</h3>
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

                <h3>Recently Added Faculty</h3>
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

export default ManageStudentAndFacultyRecords;