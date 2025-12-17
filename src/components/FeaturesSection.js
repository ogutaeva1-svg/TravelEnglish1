import React from 'react';
import Section from './Section';

const FeaturesSection = () => {
    const features = [
        "Акцент на практическую, живую речь, а не на грамматику ради грамматики.",
        "Все ситуации — из реальной жизни путешественника.",
        "Интерактивные задания: ролевые игры, аудиоситуации, мини-квесты.",
        "Ребёнок выходит на уровень A2–B1 (Pre-Intermediate) за курс."
    ];
    
    return (
        <Section id="features" title="Почему этот курс особенный?" icon="fas fa-star">
            <ul className="features-list">
                {features.map((feature, index) => (
                    <li key={index}>
                        <i className="fas fa-check feature-icon"></i>
                        <div>
                            <strong>{feature}</strong>
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default FeaturesSection;