interface buttonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const Button = ({ children, className, onClick }: buttonProps) => {
    return (
        <button className={`hover:bg-pastel-green-200
         transition-all duration-300 ease-in-out
        p-2 h-10 flex items-center justify-center rounded-sm 
      
        ${className}`}
        onClick={onClick}
        >
            {children}
        </button>
    )
}