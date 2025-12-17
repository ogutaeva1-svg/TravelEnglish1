import React, { useState, useEffect } from 'react';

const PlaneAnimation = () => {
    const [planes, setPlanes] = useState([]);
    
    useEffect(() => {
        // Создаем 5 летающих самолетиков
        const newPlanes = [];
        for (let i = 0; i < 5; i++) {
            newPlanes.push({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 20}s`,
                duration: `${15 + Math.random() * 20}s`
            });
        }
        setPlanes(newPlanes);
    }, []);
    
    return (
        <div className="planes-container">
            {planes.map(plane => (
                <div 
                    key={plane.id} 
                    className="plane-icon"
                    style={{
                        left: plane.left,
                        top: plane.top,
                        animationDelay: plane.delay,
                        animationDuration: plane.duration
                    }}
                >
                    <i className="fas fa-plane"></i>
                </div>
            ))}
        </div>
    );
};

export default PlaneAnimation;