import React from 'react';

const Section = ({ id, title, icon, children, className = "" }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                <h2 className="section-title">
                    <i className={icon}></i> {title}
                </h2>
                {children}
            </div>
        </section>
    );
};

export default Section;