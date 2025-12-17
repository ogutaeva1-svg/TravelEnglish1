import React from 'react';
import Section from './Section';
import CourseCard from './CourseCard';

const WhoForSection = () => {
    return (
        <Section id="who-for" title="Для кого курс" icon="fas fa-users">
            <div className="course-cards">
                <CourseCard title="Первая группа" icon="fas fa-child">
                    <p><strong>Возраст:</strong> 4–5 класс</p>
                    <p><strong>Уровень:</strong> начальный</p>
                    <p><strong>Формат:</strong> игровой, с элементами творчества</p>
                </CourseCard>
                
                <CourseCard title="Вторая группа" icon="fas fa-user-graduate">
                    <p><strong>Возраст:</strong> 6–8 класс</p>
                    <p><strong>Уровень:</strong> начальный/средний</p>
                    <p><strong>Формат:</strong> практико-ориентированный</p>
                </CourseCard>
            </div>
        </Section>
    );
};

export default WhoForSection;