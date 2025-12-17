import React from 'react';

const CourseCard = ({ title, icon, children, hoverEffect = true }) => {
    return (
        <div className={`course-card ${hoverEffect ? 'with-hover' : ''}`}>
            <h3 className="card-title">
                <i className={`${icon} card-icon`}></i> {title}
            </h3>
            {children}
        </div>
    );
};

export default CourseCard;