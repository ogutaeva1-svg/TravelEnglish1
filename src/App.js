import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Header from './components/Header';
import WhoForSection from './components/WhoForSection';
import ProgramSection from './components/ProgramSection';
import FeaturesSection from './components/FeaturesSection';
import DetailsSection from './components/DetailsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Modal from './components/Modal';
import PlaneAnimation from './components/PlaneAnimation';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    group: '4-5 класс'
  });
  const [submitted, setSubmitted] = useState(false);
  
  const handleEnrollClick = () => {
    setModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        group: '4-5 класс'
      });
    }, 300);
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      handleCloseModal();
    }, 2000);
  };
  
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);
  
  return (
    <>
      <PlaneAnimation />
      <Header />
      <WhoForSection />
      <ProgramSection />
      <FeaturesSection />
      <DetailsSection />
      <CtaSection onEnrollClick={handleEnrollClick} />
      <Footer onEnrollClick={handleEnrollClick} />
      
      <Modal 
        isOpen={modalOpen} 
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        formData={formData}
        onInputChange={handleInputChange}
        submitted={submitted}
      />
    </>
  );
}

export default App;
