// AcademicInfo.js
import React from 'react';
import './AcademicInfo.css'; // Optional: create a CSS file for styling

const academicData = [
    { id: 1, course: 'Data Structures', grade: 'A', attendance: '90%' },
    { id: 2, course: 'Algorithms', grade: 'B+', attendance: '85%' },
    { id: 3, course: 'Database Systems', grade: 'A-', attendance: '92%' },
    { id: 4, course: 'Operating Systems', grade: 'B', attendance: '88%' },
];

const AcademicInfo = () => {
    return (
        <div className="academic-info-container">
            <h2>Academic Information</h2>
            <table className="academic-table">
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Attendance</th>
                    </tr>
                </thead>
                <tbody>
                    {academicData.map((info) => (
                        <tr key={info.id}>
                            <td>{info.course}</td>
                            <td>{info.grade}</td>
                            <td>{info.attendance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AcademicInfo;