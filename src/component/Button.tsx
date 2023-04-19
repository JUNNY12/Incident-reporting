interface buttonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    title?: string;
}

export const Button = ({ children, className, onClick, title }: buttonProps) => {
    return (
        <button className={`hover:bg-pastel-green-200
         transition-all duration-300 ease-in-out
        p-2 h-10 flex items-center justify-center rounded-sm 
      
        ${className}`}
        onClick={onClick}
        title={title}
        >
            {children}
        </button>
    )
}