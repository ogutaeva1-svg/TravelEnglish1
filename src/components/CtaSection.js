import React from 'react';
import Section from './Section';
import CourseCard from './CourseCard';

const CtaSection = ({ onEnrollClick }) => {
    return (
        <Section id="cta" title="Набор открыт!" icon="fas fa-bullhorn">
            <CourseCard title="Успейте записаться!" icon="fas fa-exclamation-circle">
                <p>Группы маленькие — максимум 6 детей, чтобы каждый получил внимание.</p>
                <p><strong>Места ограничены!</strong></p>
                <p>👉 Запишитесь сейчас — и следующее путешествие станет первым, где ваш ребёнок заговорит по-английски без страха!</p>
            </CourseCard>
        </Section>
    );
};

export default CtaSection;