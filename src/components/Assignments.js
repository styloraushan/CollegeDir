// Assignments.js
import React from 'react';
import './Assignments.css'; 

// Sample assignments data
const assignmentsData = [
    { id: 1, title: 'Math Homework', dueDate: '2024-10-15' },
    { id: 2, title: 'Project Report', dueDate: '2024-10-20' },
    { id: 3, title: 'Science Presentation', dueDate: '2024-10-25' },
];

const Assignments = () => {
    return (
        <div className="assignments-container"> {/* Added class for styling */}
            <h2 className="assignments-title">Assignments</h2>
            <table className="assignments-table">
                <thead>
                    <tr>
                        <th>Assignment Title</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {assignmentsData.map(assignment => (
                        <tr key={assignment.id}>
                            <td>{assignment.title}</td>
                            <td>{assignment.dueDate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Assignments;