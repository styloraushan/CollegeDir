import React, { useState } from 'react';
import './Results.css';

const Results = () => {
    const [branchFilter, setBranchFilter] = useState('All');

    // Simulated student result data with new branches
    const resultData = [
        { studentName: 'Raushan Kumar', course: 'Structural Analysis', score: 85, branch: 'CSE' },
        { studentName: 'Amit Sharma', course: 'Fluid Mechanics', score: 90, branch: 'CE' },
        { studentName: 'Sneha Verma', course: 'Biomedical Signals', score: 88, branch: 'BME' },
        { studentName: 'Priya Singh', course: 'Pharmaceutical Chemistry', score: 91, branch: 'Pharma' },
        { studentName: 'Raj Gupta', course: 'Thermodynamics', score: 87, branch: 'Mechanical' },
        { studentName: 'Anjali Kumar', course: 'Mechanics of Materials', score: 83, branch: 'Mechanical' },
        { studentName: 'Vivek Pandey', course: 'Biomechanics', score: 89, branch: 'BME' },
        { studentName: 'Nikhil Mehta', course: 'Pharmacology', score: 92, branch: 'Pharma' },
        // Add more results for other branches
    ];

    // Unique branches for filter options
    const branches = ['All', 'CE','CSE', 'BME', 'Pharma', 'Mechanical'];

    // Filter results based on the selected branch
    const filteredResults = branchFilter === 'All'
        ? resultData
        : resultData.filter(result => result.branch === branchFilter);

    return (
        <div className="results-container">
            <h2>Branch-wise Student Results</h2>

            {/* Branch Filter Dropdown */}
            <div className="branch-filter">
                <label htmlFor="branch">Select Branch:</label>
                <select id="branch" value={branchFilter} onChange={(e) => setBranchFilter(e.target.value)}>
                    {branches.map((branch, index) => (
                        <option key={index} value={branch}>{branch}</option>
                    ))}
                </select>
            </div>

            {/* Results Table */}
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
                    {filteredResults.length > 0 ? (
                        filteredResults.map((result, index) => (
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
                            <td colSpan="5">No results found for the selected branch.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Results;