import React, { useEffect, useState } from 'react';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Simulated initial course data
        const fetchCourseList = async () => {
            const data = [
                {
                    id: 1,
                    title: 'Introduction to Computer Science',
                    description: 'A foundational course covering the basics of computer science.',
                    department_id: 1,
                    faculty_id: 1,
                },
                {
                    id: 2,
                    title: 'Data Structures and Algorithms',
                    description: 'An in-depth exploration of data structures and algorithms.',
                    department_id: 1,
                    faculty_id: 2,
                },
                {
                    id: 3,
                    title: 'Web Development',
                    description: 'Learn how to create dynamic and responsive websites.',
                    department_id: 2,
                    faculty_id: 3,
                },
                {
                    id: 4,
                    title: 'Machine Learning',
                    description: 'An introduction to machine learning concepts and applications.',
                    department_id: 3,
                    faculty_id: 4,
                },
                // Add more courses as needed
            ];
            setCourses(data);
        };

        fetchCourseList();
    }, []);

    return (
        <div className="courses-container">
            <h2>Courses Offered</h2>
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
                            <td>{course.department_id}</td>
                            <td>{course.faculty_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Courses;