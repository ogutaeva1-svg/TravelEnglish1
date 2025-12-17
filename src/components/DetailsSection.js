import React from 'react';
import Section from './Section';
import CourseCard from './CourseCard';

const DetailsSection = () => {
    return (
        <Section id="details" title="Детали курса" icon="fas fa-info-circle">
            <div className="schedule-price-container">
                <div className="schedule-box">
                    <h3 className="card-title">
                        <i className="fas fa-clock"></i> Расписание
                    </h3>
                    <p><strong>Четверг, 15:00 (МСК)</strong> — группа 4–5 класс</p>
                    <p><strong>Пятница, 15:30 (МСК)</strong> — группа 6–8 класс</p>
                    <p>Длительность урока: 60 минут</p>
                </div>
                
                <div className="price-box">
                    <h3 className="card-title">
                        <i className="fas fa-tag"></i> Стоимость
                    </h3>
                    <p>Полный курс (10 уроков):</p>
                    <div className="price-amount">12 000 руб</div>
                    <p>Абонемент:</p>
                    <div className="price-amount">1 300 руб / урок</div>
                    <p><em>Возможна оплата в рассрочку</em></p>
                </div>
            </div>
            
            <CourseCard title="Что потребуется" icon="fas fa-laptop">
                <ul className="features-list">
                    <li>Стационарный компьютер или ноутбук с наушниками и микрофоном</li>
                    <li>Стабильный интернет и Zoom</li>
                    <li>Тетрадь для заметок и ручка</li>
                </ul>
            </CourseCard>
        </Section>
    );
};

export default DetailsSection;