interface buttonProps {
    children: React.ReactNode;
    className?: string;
}

export const Button = ({ children, className }:buttonProps) => {
    return (
        <button className={`bg-pastel-green-200 text-pastel-green-900 
        p-2 h-10 flex items-center justify-center rounded-sm 
        hover:bg-pastel-green-500
        hover:text-mercury-white-200
        transition-all duration-300 ease-in-out
        ${className}`}>
            {children}
        </button>
    )
}