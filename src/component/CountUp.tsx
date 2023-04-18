import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
    start: number;
    end: number;
    duration?: number;
    decimals?: number;
    className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
    start,
    end,
    duration = 2,
    decimals = 0,
    className = ''
}) => {
    const [count, setCount] = useState(start);
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const timeElapsed = timestamp - startTimestamp;
            const progress = Math.min(timeElapsed / (duration * 1000), 1);
            const newCount = Math.floor(
                (end - start) * progress + start
            );
            setCount(newCount);
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, []);

    const formattedCount = count.toFixed(decimals);

    return (
        <span className={className} ref={countRef}>
            {formattedCount}
        </span>
    );
};







