import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2'; // Import multiple chart types
import { Chart, registerables } from 'chart.js';
import './DashboardWithGraphs.css';

// Register Chart.js components
Chart.register(...registerables);

const DashboardWithGraphs = () => {
    // Sample data for Student Enrollment (Line Chart)
    const studentEnrollmentData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Student Enrollment',
                data: [120, 190, 130, 150, 220, 240, 180, 200, 220, 250, 270, 290],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 2,
                tension: 0.1, // Smooth line
            },
        ],
    };

    // Sample data for Faculty Course Loads (Bar Chart)
    const facultyCourseLoadData = {
        labels: ['Computer Science', 'Mathematics', 'Physics', 'Biology', 'Chemistry'],
        datasets: [
            {
                label: 'Faculty Course Load',
                data: [8, 6, 7, 4, 5],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(54,162,235,0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(75,192,192,0.6)',
                    'rgba(153,102,255,0.6)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)',
                    'rgba(153,102,255,1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    // Sample data for Student Distribution (Pie Chart)
    const studentDistributionData = {
        labels: ['Engineering', 'Arts', 'Science', 'Commerce', 'Law'],
        datasets: [
            {
                label: 'Student Distribution',
                data: [300, 200, 150, 100, 50],
                backgroundColor: [
                    'rgba(255,99,132,0.6)',
                    'rgba(54,162,235,0.6)',
                    'rgba(255,206,86,0.6)',
                    'rgba(75,192,192,0.6)',
                    'rgba(153,102,255,0.6)',
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,206,86,1)',
                    'rgba(75,192,192,1)',
                    'rgba(153,102,255,1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    // Chart options for all charts
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Count', // Y-axis label for all charts
                },
            },
            x: {
                title: {
                    display: true,
                    text: 'Categories', // X-axis label for all charts
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                },
            },
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return (
        <div className="dashboard-graph-container">
            <h2 className="dashboard-title">Dashboard with Graphs</h2>

            {/* Line Chart for Student Enrollment Trends */}
            <div className="graph">
                <h3>Student Enrollment Trends (Monthly)</h3>
                <Line data={studentEnrollmentData} options={options} />
            </div>

            {/* Bar Chart for Faculty Course Loads */}
            <div className="graph">
                <h3>Faculty Course Loads by Department</h3>
                <Bar data={facultyCourseLoadData} options={options} />
            </div>

            {/* Pie Chart for Student Distribution across Departments */}
            <div className="graph">
                <h3>Student Distribution by Department</h3>
                <Pie data={studentDistributionData} />
            </div>
        </div>
    );
};

export default DashboardWithGraphs;