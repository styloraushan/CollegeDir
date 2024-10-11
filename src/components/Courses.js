import React, { useEffect, useState } from 'react';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        // Simulated initial course data
        const fetchCourseList = async () => {
            const data = [
                {
                    id: 1,
                    title: 'Introduction to Computer Science',
                    description: 'A foundational course covering the basics of computer science.',
                },
                {
                    id: 2,
                    title: 'Data Structures and Algorithms',
                    description: 'An in-depth exploration of data structures and algorithms.',
                },
                {
                    id: 3,
                    title: 'Web Development',
                    description: 'Learn how to create dynamic and responsive websites.',
                },
                {
                    id: 4,
                    title: 'Machine Learning',
                    description: 'An introduction to machine learning concepts and applications.',
                },
                // Add more courses as needed
            ];
            setCourses(data);
        };

        fetchCourseList();
    }, []);

    const enrollInCourse = (courseId) => {
        const courseToEnroll = courses.find(course => course.id === courseId);
        if (courseToEnroll && !enrolledCourses.includes(courseToEnroll)) {
            setEnrolledCourses([...enrolledCourses, courseToEnroll]);
            alert(`Enrolled in ${courseToEnroll.title}!`);
        } else {
            alert(`Already enrolled in ${courseToEnroll.title}.`);
        }
    };

    const unenrollFromCourse = (courseId) => {
        setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
        alert(`Unenrolled from course successfully.`);
    };

    return (
        <div className="courses-container">
            <h2 className="courses-title">Available Courses</h2>
            <table className="courses-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Course Title</th>
                        <th>Description</th>
                        <th>Action</th> {/* Column for Enroll */}
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course, index) => (
                        <tr key={course.id}>
                            <td>{index + 1}</td>
                            <td>{course.title}</td>
                            <td>{course.description}</td>
                            <td>
                                <button className="enroll-button" onClick={() => enrollInCourse(course.id)}>Enroll</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
    
            <h3 className="courses-title">Enrolled Courses</h3>
            <div className="enrolled-courses">
                {enrolledCourses.length > 0 ? (
                    <table className="enrolled-courses-table">
                        <tbody>
                            {enrolledCourses.map(course => (
                                <tr key={course.id} className="enrolled-course-item">
                                    <td>
                                        <strong>{course.title}</strong> - {course.description}
                                    </td>
                                    <td>
                                        <button className="unenroll-button" onClick={() => unenrollFromCourse(course.id)}>Unenroll</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>No courses enrolled yet.</p>
                )}
            </div>
        </div>
    );
};

export default Courses;