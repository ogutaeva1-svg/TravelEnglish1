import React from 'react';

const Footer = ({ onEnrollClick }) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-note">
                        Запишитесь на пробный урок и убедитесь, что наш курс — это именно то, что нужно вашему ребенку для уверенного общения в путешествиях!
                    </p>
                    
                    <button className="cta-button" onClick={onEnrollClick}>
                        Записаться на курс
                    </button>
                    
                    <p style={{color: 'var(--gray-text)', marginTop: '20px'}}>
                        © 2023 TravelEnglish. Курс «Английский для путешествий»
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;