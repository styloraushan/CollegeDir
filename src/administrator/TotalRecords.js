// TotalRecords.js
import React from 'react';
import './TotalRecords.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faUser, faClipboardCheck, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const TotalRecords = () => {
    // Sample data
    const records = {
        totalStudents: 150,
        totalFaculty: 20,
        todaysAttendance: 135,
        presentStudents: 130,
        presentFaculty: 18,
        absentStudents: 20,
        absentFaculty: 2,
    };

    return (
        <div className="total-records-container">
            <h2 className="records-title">Dashboard Statistics</h2>
            <div className="records-grid">
                <div className="record-card">
                    <FontAwesomeIcon icon={faUserGraduate} className="fa-icon" />
                    <h3>Total Students</h3>
                    <p>{records.totalStudents}</p>
                </div>
                <div className="record-card">
                    <FontAwesomeIcon icon={faUser} className="fa-icon" />
                    <h3>Total Faculty</h3>
                    <p>{records.totalFaculty}</p>
                </div>
                <div className="record-card">
                    <FontAwesomeIcon icon={faClipboardCheck} className="fa-icon" />
                    <h3>Today's Attendance</h3>
                    <p>{records.todaysAttendance}</p>
                </div>
                <div className="record-card">
                    <FontAwesomeIcon icon={faClipboardList} className="fa-icon" />
                    <h3>Present Students</h3>
                    <p>{records.presentStudents}</p>
                </div>
                <div className="record-card">
                    <FontAwesomeIcon icon={faClipboardCheck} className="fa-icon" />
                    <h3>Present Faculty</h3>
                    <p>{records.presentFaculty}</p>
                </div>
                <div className="record-card">
                    <FontAwesomeIcon icon={faUserGraduate} className="fa-icon" />
                    <h3>Absent Students</h3>
                    <p>{records.absentStudents}</p>
                </div>
                <div className="record-card">
                    <FontAwesomeIcon icon={faUser} className="fa-icon" />
                    <h3>Absent Faculty</h3>
                    <p>{records.absentFaculty}</p>
                </div>
            </div>
        </div>
    );
};

export default TotalRecords;