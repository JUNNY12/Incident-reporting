interface buttonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    title?: string;
    disabled?: boolean;
}

export const Button = ({ children,disabled, className, onClick, title }: buttonProps) => {
    return (
        <button className={`hover:bg-pastel-green-200
         transition-all duration-300 ease-in-out
        p-2 h-10 flex items-center justify-center rounded-sm 
      
        ${className}`}
        onClick={onClick}
        title={title}
        disabled={disabled}
        >
            {children}
        </button>
    )
}