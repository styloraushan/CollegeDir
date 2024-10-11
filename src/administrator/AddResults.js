import React, { useState } from 'react';
import './AddResults.css';

const AddResults = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        course: '',
        score: '',
        branch: 'CSE', // Default to CSE
    });

    const [results, setResults] = useState([]);

    const branches = ['CSE', 'BME', 'Pharma', 'Mechanical'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newResult = {
            studentName: formData.studentName,
            course: formData.course,
            score: parseInt(formData.score),
            branch: formData.branch,
        };

        // Add the new result to the list
        setResults([...results, newResult]);

        // Reset form fields
        setFormData({
            studentName: '',
            course: '',
            score: '',
            branch: 'CSE',
        });

        alert('Result added successfully!');
    };

    return (
        <div className="add-results-container">
            <h2>Add Student Results</h2>

            <form onSubmit={handleSubmit} className="result-form">
                <div className="form-group">
                    <label htmlFor="studentName">Student Name:</label>
                    <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="course">Course:</label>
                    <input
                        type="text"
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="score">Score:</label>
                    <input
                        type="number"
                        id="score"
                        name="score"
                        value={formData.score}
                        onChange={handleInputChange}
                        required
                        min="0"
                        max="100"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="branch">Branch:</label>
                    <select
                        id="branch"
                        name="branch"
                        value={formData.branch}
                        onChange={handleInputChange}
                    >
                        {branches.map((branch, index) => (
                            <option key={index} value={branch}>
                                {branch}
                            </option>
                        ))}
                    </select>
                </div>

                <button type="submit" className="submit-button">Add Result</button>
            </form>

            <h3>Added Results</h3>
            <table className="results-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Student Name</th>
                        <th>Course</th>
                        <th>Score</th>
                        <th>Branch</th>
                    </tr>
                </thead>
                <tbody>
                    {results.length > 0 ? (
                        results.map((result, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{result.studentName}</td>
                                <td>{result.course}</td>
                                <td>{result.score}</td>
                                <td>{result.branch}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No results added yet.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AddResults;