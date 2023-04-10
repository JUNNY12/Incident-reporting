interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }:ContainerProps) => {
  return (
    <section className={`p-12 pt-40   
    tabletM:pt-24
    mobileL:ps-8 mobileL:pe-8 
   
    ${className}`}>
        {children}
    </section>
    )
};

export const Grid = ({ children, className }:ContainerProps) => {
    return (
        <section className={`grid grid-cols-2 gap-4  ${className}`}>
            {children}
        </section>
    )
}

export const Flex = ({ children, className }:ContainerProps) => {
    return (
        <section className={`flex ${className}`}>
            {children}
        </section>
    )
}