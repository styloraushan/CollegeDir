// FacultyContact.js
import React from 'react';
import './FacultyContact.css'; // Make sure to import the CSS file

// Sample data simulating faculty advisor records
const advisorData = [
    { id: 1, name: 'Dr. Jane Doe', email: 'jane.doe@university.edu', phone: '555-0123' },
    { id: 2, name: 'Prof. John Smith', email: 'john.smith@university.edu', phone: '555-0456' },
];

const FacultyContact = () => {
    return (
        <div className="faculty-contact-container">
            <h2 className="faculty-title">Contact Faculty Advisors</h2>
            <table className="faculty-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {advisorData.map(advisor => (
                        <tr key={advisor.id} className="advisor-row">
                            <td>{advisor.name}</td>
                            <td>
                                <a href={`mailto:${advisor.email}`} className="contact-link">{advisor.email}</a>
                            </td>
                            <td>
                                <a href={`tel:${advisor.phone}`} className="contact-link">{advisor.phone}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FacultyContact;