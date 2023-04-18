import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <article
      className={`bg-mercury-white-100 rounded-sm shadow-lg 
      p-4 cursor-pointer 
      transition-transform hover:-translate-y-2 ease-in-out duration-300
      ${className}`}
    >
      {children}
    </article>
  );
};

export default Card;
