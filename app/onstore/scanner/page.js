"use client"
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import QRScanner from '../../components/QRScanner';
import { Toaster } from 'react-hot-toast';
import QrCartContents from '../../components/QrCartContents';
import ShoppingList from '../../components/ShoppingList';
import Modal from "../../components/Modal"
import { FaShoppingCart } from 'react-icons/fa'; // Import an icon for the button

const ScannerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className='w-full h-full'>
      <Navbar />
      <div className='w-[100vw] h-[90vh] QR-container pt-[5vh] pb-[5vh] px-[2vw] flex gap-5'>
        <QRScanner />
        <QrCartContents />
      </div>
      <Toaster />

      {/* Floating Button */}
      <button
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        onClick={toggleModal}
      >
        <FaShoppingCart size={24} />
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <ShoppingList />
      </Modal>
    </main>
  );
};

export default ScannerPage;
