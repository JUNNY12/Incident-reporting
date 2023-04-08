import React from 'react'

interface inputProps {
    type: string | 'text' | 'email' | 'password' | 'number'
    placeholder: string
    className?: string
    required?: boolean
}

export const Input = ({ type, placeholder, className, required }: inputProps) => {
    return (
        <input type={type} placeholder={placeholder}
        required={required}
            className={`
            p-4 rounded-md 
            bg-mercury-white-50
            focus:outline-none
            focus:border-pastel-green-200
            ${className}`} />
    )
}


export const TextField = ({placeholder, className }: inputProps) => {
    return (
        <textarea placeholder={placeholder}
            className={`
            p-4 rounded-md
            bg-mercury-white-50
            focus:outline-none
            focus:border-pastel-green-200
            ${className}`} />
    )
}

