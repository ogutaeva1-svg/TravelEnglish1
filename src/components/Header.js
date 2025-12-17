import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="header-bg"></div>
            <div className="header-overlay"></div>
            <div className="container">
                <div className="logo">
                    <i className="fas fa-globe-americas logo-icon"></i>
                    <div className="logo-text">TravelEnglish</div>
                </div>
                
                <h1 className="main-heading">Курс «Английский для путешествий»</h1>
                
                <p className="tagline">
                    Мечтаете свободно общаться за границей — от заказа кофе до поиска утраченного чемодана? 
                    Этот курс научит вашего ребёнка реальному разговорному английскому, который пригодится в отпуске, поездках и будущих путешествиях!
                </p>
            </div>
        </header>
    );
};

export default Header;