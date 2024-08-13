"use client"; // Mark this file as a client component

import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out">
      <div className="relative bg-white w-[90vw] max-w-2xl p-6 rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out scale-100">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="animate-fade-in">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;


