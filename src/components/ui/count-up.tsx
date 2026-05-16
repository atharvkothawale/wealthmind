
"use client";

import { useEffect, useState } from "react";

interface CountUpProps {
    end: number;
    duration?: number;
    decimals?: number;
    prefix?: string;
    className?: string;
}

export function CountUp({ end, duration = 1000, prefix = "", className = "" }: CountUpProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        const startValue = count; // Start from current displayed value for smooth transitions

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function (Out Expo)
            const easeOutExpo = (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            };

            const current = startValue + (end - startValue) * easeOutExpo(progress);
            setCount(current);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setCount(end); // Ensure final value is exact
            }
        };

        window.requestAnimationFrame(step);
    }, [end, duration]); // Dependency on 'end' triggers new animation

    return (
        <span className={className}>
            {prefix}{Math.round(count).toLocaleString()}
        </span>
    );
}
