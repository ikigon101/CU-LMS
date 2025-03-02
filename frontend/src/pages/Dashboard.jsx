import React from 'react';
import Notification from '../components/Notification';
import "/Users/jyotsnachauhan/Desktop/LMS/frontend/src/styles/Dashboard.css";
import { Link } from 'react-router-dom';
import Courses from './Courses';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
     
      
      <div className="dashboard-content">
        <section className="courses-section">
          <div className='text-row'>
            <span className="text">Courses</span>
            <Link to="/Courses" className="view-all">View all</Link>
          </div>
      
          <div className="courses-grid">
            <div className="course-card">21CSH-XXX<br/>Course Name</div>
            <div className="course-card">21CSH-XXX<br/>Course Name</div>
            <div className="course-card">21CSH-XXX<br/>Course Name</div>
            <div className="course-card">21CSH-XXX<br/>Course Name</div>
            <div className="course-card">21CSH-XXX<br/>Course Name</div>
            <div className="course-card">21CSH-XXX<br/>Course Name</div>
          </div>
        </section>
        
        <section className="notifications-section">
        <div className='text-row'>
            <span className="text">Notifications</span>
            <Link to="/Notifications" className="view-all">View all</Link>


          </div>
          <div className="notification-card">21CSH-XXX : Course Name<br/>New lecture notes have been updated</div>
          <div className="notification-card">21CSH-XXX : Course Name<br/>New ppt has been added</div>
          <div className="notification-card">21CSH-XXX : Course Name<br/>New lecture video has been updated</div>
        </section>
     
      
      <section className="timeline-section">
        <h2>Timeline</h2>
        <div className="timeline-filters">
          <select>
            <option>Next 7 days</option>
          </select>
          <select>
            <option>Sort by dates</option>
          </select>
        </div>
        <div className="timeline-item">
          <span>Assignment: 1</span>
          <span className="due-date">Due on: 25 February, 2025</span>
        </div>
        <div className="timeline-item">
          <span>Surprise Test: 1</span>
          <span className="due-date">Due on: 25 February, 2025</span>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Dashboard;
