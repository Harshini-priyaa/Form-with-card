import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css'; // Custom styles for the modal

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Ensure this exists in your index.html
  );
};

export default Modal;
