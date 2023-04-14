interface headingsProps {
    title?: string;
    className?: string;
}

export const H1 = ({title, className}:headingsProps) => {
    return (
        <h1 className={`leading-tight text-5xl font-myFont mb-6 ${className}`}>{title}</h1>
    )
} 

export const H2 = ({title, className}:headingsProps) => {
    return (
        <h2 className={`text-5xl leading-tight mb-6 font-myFont ${className}`}>{title}</h2>
    )
}

export const H3 = ({title, className}:headingsProps) => {
    return (
        <h3 className={`text-3xl leading-tight mb-6 font-myFont text-pastel-green-100 ${className}`}>{title}</h3>
    )
}

