import React from 'react';

export const Badge = ({ children, className, onClick }) => {
  return (
    <div
      className={`bg-gray-300 text-black px-2 py-1 rounded-full cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
