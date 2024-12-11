"use client";

import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;