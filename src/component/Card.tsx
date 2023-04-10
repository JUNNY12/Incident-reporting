import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`bg-mercury-white-100 rounded-lg shadow-lg 
      p-6 cursor-pointer 
      transition-transform hover:-translate-y-2 ease-in-out duration-300
      ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
