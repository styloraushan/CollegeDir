// FacultyDashboard.js
import React, { useState } from 'react';
import ClassList from './ClassList';
import UpdateProfile from './UpdateProfile';
import Attendance from './Attendance';
import Courses from './Courses';
import AddResults from '../administrator/AddResults';
import AddCourses from '../administrator/AddCourses';
import AddStudent from './AddStudent'; // Import the AddStudent component
import './FacultyDashboard.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faUserEdit, faUserPlus, faClipboardCheck,faSignOutAlt,faClipboard,faChartBar,faSearch } from '@fortawesome/free-solid-svg-icons';


const FacultyDashboard = () => {
    const [activeTab, setActiveTab] = useState('classList');
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'classList':
                return <ClassList />;
            case 'updateProfile':
                return <UpdateProfile />;
            case 'addStudent': // New case for AddStudent
                return <AddStudent />;
                case 'attendance': // New case for Attendance
                return <Attendance />;
                case 'Courses': // New case for Attendance
                return <Courses />;  
                case 'AddCourses':
                    return <AddCourses />;  
                    case 'AddResults':
                        return <AddResults />;   
            default:
                return <ClassList />;
        }
    };

    return (
        <div className="dashboard-container">
            <div className="sidebar">
            <img 
                    src="https://avatars.githubusercontent.com/u/142259385?s=400&u=b4e5237ed879a69258e3c05ddebc7a7ecfe3e0fc&v=4" // Replace with your image path
                    alt="Profile"
                    className="profile-image"
                />
                <h1 className="dashboard-title">Raushan Kumar</h1>
                <nav className="tab-navigation">
    <button
        className={`tab-button ${activeTab === 'classList' ? 'active' : ''}`}
        onClick={() => setActiveTab('classList')}
    >
        <FontAwesomeIcon icon={faList} className="fa-icon" /> Manage Class List
    </button>
    <button
        className={`tab-button ${activeTab === 'updateProfile' ? 'active' : ''}`}
        onClick={() => setActiveTab('updateProfile')}
    >
        <FontAwesomeIcon icon={faUserEdit} className="fa-icon" /> Update Profile
    </button>
    <button
        className={`tab-button ${activeTab === 'addStudent' ? 'active' : ''}`}
        onClick={() => setActiveTab('addStudent')}
    >
        <FontAwesomeIcon icon={faUserPlus} className="fa-icon" /> Add Student
    </button>
    <button
        className={`tab-button ${activeTab === 'attendance' ? 'active' : ''}`}
        onClick={() => setActiveTab('attendance')}
    >
        <FontAwesomeIcon icon={faClipboardCheck} className="fa-icon" /> Take Attendance
    </button>
    <button
        className={`tab-button ${activeTab === 'Courses' ? 'active' : ''}`}
        onClick={() => setActiveTab('Courses')}
    >
        <FontAwesomeIcon icon={faClipboardCheck} className="fa-icon" /> Courses
    </button>
    <button
                        className={`tab-button ${activeTab === 'AddCourses' ? 'active' : ''}`}
                        onClick={() => setActiveTab('AddCourses')}
                    >
                        <FontAwesomeIcon icon={faClipboard} className="fa-icon" /> AddCourses
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'AddResults' ? 'active' : ''}`}
                        onClick={() => setActiveTab('AddResults')}
                    >
                        <FontAwesomeIcon icon={faChartBar} className="fa-icon" /> Results
                    </button>
</nav>
            </div>
            <div className="content-area">
    <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰ {/* Hamburger icon for small screens */}
    </button>
    <div className="navbar">
        <h3>Faculty Dashboard</h3>
        <form className="search-form">
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-button">
                <FontAwesomeIcon icon={faSearch} /> {/* Search icon */}
            </button>
        </form>
        <button className="logout-button">
            <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> {/* Logout icon */}
            <span className="button-text">Logout</span>
        </button>
    </div>
    {renderContent()}
</div>
        </div>
    );
};

export default FacultyDashboard;