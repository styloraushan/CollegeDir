import React, { useState } from 'react';
import './AddCourses.css';

const AddCourses = () => {
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: 'Introduction to Computer Science',
            description: 'A foundational course covering the basics of computer science.',
            departmentId: 'CSE01',
            facultyId: 'FAC001'
        },
        {
            id: 2,
            title: 'Data Structures and Algorithms',
            description: 'An in-depth exploration of data structures and algorithms.',
            departmentId: 'CSE01',
            facultyId: 'FAC002'
        }
    ]);

    const [newCourse, setNewCourse] = useState({
        title: '',
        description: '',
        departmentId: '',
        facultyId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewCourse({ ...newCourse, [name]: value });
    };

    const addCourse = (e) => {
        e.preventDefault();
        if (newCourse.title.trim() && newCourse.description.trim() && newCourse.departmentId.trim() && newCourse.facultyId.trim()) {
            const newCourseData = {
                id: courses.length + 1, // Simulated ID
                ...newCourse
            };
            setCourses([...courses, newCourseData]);
            setNewCourse({ title: '', description: '', departmentId: '', facultyId: '' });
            alert('Course added successfully!');
        } else {
            alert('Please fill in all the fields.');
        }
    };

    return (
        <div className="admin-courses-container">
            <h2>Add New Course</h2>
            <form className="add-course-form" onSubmit={addCourse}>
                <div className="form-group">
                    <label htmlFor="title">Course Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={newCourse.title}
                        onChange={handleChange}
                        placeholder="Enter course title"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Course Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={newCourse.description}
                        onChange={handleChange}
                        placeholder="Enter course description"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="departmentId">Department ID:</label>
                    <input
                        type="text"
                        id="departmentId"
                        name="departmentId"
                        value={newCourse.departmentId}
                        onChange={handleChange}
                        placeholder="Enter department ID"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="facultyId">Faculty ID:</label>
                    <input
                        type="text"
                        id="facultyId"
                        name="facultyId"
                        value={newCourse.facultyId}
                        onChange={handleChange}
                        placeholder="Enter faculty ID"
                        required
                    />
                </div>
                <button type="submit" className="add-course-button">Add Course</button>
            </form>

            <h3>Recently Addedd Courses</h3>
            <table className="courses-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Course Title</th>
                        <th>Description</th>
                        <th>Department ID</th>
                        <th>Faculty ID</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={course.id}>
                            <td>{index + 1}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>{course.departmentId}</td>
                            <td>{course.facultyId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AddCourses;