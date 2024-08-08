import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+41798334383'; // Replace with your actual WhatsApp number
  const message = encodeURIComponent('Bonjour, je suis intéressé par votre offre de coaching.'); // Pre-filled message

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 text-white rounded-full p-3 hover:bg-green-600 transition-colors duration-300 shadow-lg"
      >
        <FaWhatsapp className="text-2xl mr-2" />
        <span className="hidden md:inline">Contactez-nous sur WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;