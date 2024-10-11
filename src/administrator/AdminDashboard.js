// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'; // Import the CSS file for styling
import ManageStudentAndFacultyRecords from './ManageStudentAndFacultyRecords';
import DashboardWithGraphs from './DashboardWithGraphs';
import Records from './Records'; // Correct import
import TotalRecords from './TotalRecords';
import AddCourses from './AddCourses';
import AddResults from './AddResults';
import Courses from '../faculty/Courses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faChartLine, faClipboard, faSignOutAlt, faTachometerAlt,faPlusCircle,faBook,faChartBar,faSearch } from '@fortawesome/free-solid-svg-icons'; // Add icons here

const AdminDashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('TotalRecords');
    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    // Set the initial active tab based on URL or other logic if necessary
    useEffect(() => {
        setActiveTab('TotalRecords');
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'TotalRecords':
                return <TotalRecords />;
            case 'manageRecords':
                return <ManageStudentAndFacultyRecords />;
            case 'viewGraphs':
                return <DashboardWithGraphs />;
            case 'records':
                return <Records />;
                case 'AddCourses':
                    return <AddCourses />;
                    case 'Courses':
                        return <Courses />;  
                        case 'AddResults':
                            return <AddResults />;    
             
            default:
                return <ManageStudentAndFacultyRecords />;
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
                        className={`tab-button ${activeTab === 'TotalRecords' ? 'active' : ''}`}
                        onClick={() => setActiveTab('TotalRecords')}
                    >
                        <FontAwesomeIcon icon={faTachometerAlt} className="fa-icon" /> Dashboard
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'manageRecords' ? 'active' : ''}`}
                        onClick={() => setActiveTab('manageRecords')}
                    >
                        <FontAwesomeIcon icon={faUsers} className="fa-icon" /> Manage Student and Faculty
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'viewGraphs' ? 'active' : ''}`}
                        onClick={() => setActiveTab('viewGraphs')}
                    >
                        <FontAwesomeIcon icon={faChartLine} className="fa-icon" /> Dashboard with Graphs
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'records' ? 'active' : ''}`}
                        onClick={() => setActiveTab('records')}
                    >
                        <FontAwesomeIcon icon={faClipboard} className="fa-icon" /> Records
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'AddCourses' ? 'active' : ''}`}
                        onClick={() => setActiveTab('AddCourses')}
                    >
                        <FontAwesomeIcon icon={faPlusCircle} className="fa-icon" /> AddCourses
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'Courses' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Courses')}
                    >
                        <FontAwesomeIcon icon={faBook} className="fa-icon" /> Courses
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
        <h3>Admin Dashboard</h3>
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

export default AdminDashboard;