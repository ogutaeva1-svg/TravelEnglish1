import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, formData, onInputChange, submitted }) => {
    if (!isOpen) return null;
    
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                
                <h3 className="modal-title">Запись на курс</h3>
                
                {submitted ? (
                    <div style={{textAlign: 'center', padding: '30px 0'}}>
                        <i className="fas fa-check-circle" style={{fontSize: '4rem', color: 'var(--accent-teal)'}}></i>
                        <p style={{marginTop: '20px', fontSize: '1.2rem'}}>
                            Спасибо! Ваша заявка отправлена.<br/>
                            Мы свяжемся с вами в течение 24 часов.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label className="form-label">Имя родителя</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                name="name"
                                value={formData.name}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-input" 
                                name="email"
                                value={formData.email}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Телефон</label>
                            <input 
                                type="tel" 
                                className="form-input" 
                                name="phone"
                                value={formData.phone}
                                onChange={onInputChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="form-label">Выберите группу</label>
                            <select 
                                className="form-input" 
                                name="group"
                                value={formData.group}
                                onChange={onInputChange}
                            >
                                <option value="4-5 класс">4-5 класс (четверг, 15:00 МСК)</option>
                                <option value="6-8 класс">6-8 класс (пятница, 15:30 МСК)</option>
                            </select>
                        </div>
                        
                        <button type="submit" className="submit-button">
                            Отправить заявку
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Modal;