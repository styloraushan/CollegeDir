import React, { useState } from 'react';
import Profile from './Profile';
import Assignments from './Assignments';
import FacultyContact from './FacultyContact';
import AcademicInfo from './AcademicInfo';
import Courses from './Courses';
import Results from './Results';
import './Dashboard.css';
import './FacultyContact.css';
import './Assignments.css';
import './Profile.css';
import './AcademicInfo.css';

// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardList, faEnvelope, faGraduationCap, faSignOutAlt, faBook, faChartBar, faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('profile');
    const [searchTerm, setSearchTerm] = useState('');

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <Profile />;
            case 'assignments':
                return <Assignments />;
            case 'contact':
                return <FacultyContact />;
            case 'academic':
                return <AcademicInfo />;
            case 'Courses':
                return <Courses />;
            case 'Results':
                return <Results />;
            default:
                return <Profile />;
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="dashboard-container">
            <div className={`sidebar ${sidebarVisible ? 'visible' : 'hidden'}`}>
                <img 
                    src="https://avatars.githubusercontent.com/u/142259385?s=400&u=b4e5237ed879a69258e3c05ddebc7a7ecfe3e0fc&v=4" // Replace with your image path
                    alt="Profile"
                    className="profile-image"
                />
                <h1 className="dashboard-title">Raushan Kumar</h1>
                <nav className="tab-navigation">
                    <button
                        className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
                        onClick={() => setActiveTab('profile')}
                    >
                        <FontAwesomeIcon icon={faUser} className="fa-icon" /> Profile
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'assignments' ? 'active' : ''}`}
                        onClick={() => setActiveTab('assignments')}
                    >
                        <FontAwesomeIcon icon={faClipboardList} className="fa-icon" /> Assignments
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'contact' ? 'active' : ''}`}
                        onClick={() => setActiveTab('contact')}
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> Contact Faculty
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'academic' ? 'active' : ''}`}
                        onClick={() => setActiveTab('academic')}
                    >
                        <FontAwesomeIcon icon={faGraduationCap} className="fa-icon" /> Academic Info
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'Courses' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Courses')}
                    >
                        <FontAwesomeIcon icon={faBook} className="fa-icon" /> Courses
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'Results' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Results')}
                    >
                        <FontAwesomeIcon icon={faChartBar} className="fa-icon" /> Results
                    </button>
                </nav>
            </div>
            <div className="content-area">
                <button className="sidebar-toggle" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={sidebarVisible ? faTimes : faBars} /> {/* Toggle icon */}
                </button>
                <div className="navbar">
                    <h3>Student Dashboard</h3>
                    <form className="search-form" onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="search-input" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
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

export default Dashboard;