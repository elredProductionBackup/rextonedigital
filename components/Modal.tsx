"use client";

import React, { useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      
      <div
        className="relative w-full max-w-[750px] max-h-[85vh] bg-white rounded-[20px] md:rounded-[30px] shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="sticky top-0 bg-white z-20 px-5 md:px-[30px] pt-5 md:pt-[30px] pb-4 flex justify-between items-start">
          
          <h3 className="text-[40px] font-inter md:text-[50px] font-medium tracking-[-2px] text-black">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="text-black transition-colors shrink-0 cursor-pointer"
          >
            <div className="bg-gray-100 rounded-full p-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 md:w-4 md:h-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* BODY */}
        <div className="overflow-y-auto px-5 md:px-[30px] pb-10 font-sans custom-scrollbar text-left">
          {children}
        </div>
      </div>

      {/* BACKDROP CLICK */}
      <div
        className="absolute inset-0 -z-10"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default Modal;