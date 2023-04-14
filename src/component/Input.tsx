import React from 'react'

interface inputProps {
    type: string | 'text' | 'email' | 'password' | 'number';
    placeholder: string;
    className?: string;
    required?: boolean;
    name?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  }
  
  

export const Input = ({ type, placeholder, className, required, name, value, onChange }: inputProps) => {
    return (
        <input type={type} placeholder={placeholder}
            required={required}
            name={name}
            value={value}
            onChange={onChange}
            className={`
            p-4 rounded-sm
            bg-mercury-white-50
            focus:outline-none
            ${className}`} />
    )
}


export const TextField = ({ placeholder, className, required, name, value, onChange }: inputProps) => {
    return (
        <textarea placeholder={placeholder}

            required={required}
            name={name}
            value={value}
            onChange={onChange}
            className={`
            p-4 rounded-sm
            bg-mercury-white-50
            focus:outline-none
            focus:border-pastel-green-200
            ${className}`} />
    )
}

