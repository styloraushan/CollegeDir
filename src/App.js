// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import SignupForm from './SignUp/SignupForm';
import Dashboard from './components/Dashboard';
import FacultyDashboard from './faculty/FacultyDashboard';
import AdminDashboard from './administrator/AdminDashboard';
const App = () => {
    return (
        <Router>
            <div style={{ padding: '20px' }}>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/signup" element={<SignupForm />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/faculty" element={<FacultyDashboard />} /> 
                    <Route path="/admin" element={<AdminDashboard />} /> 
                    {/* Add route for Faculty Dashboard */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;