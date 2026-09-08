"use client";
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
    value: string;
    duration?: number;
    className?: string;
}

export const AnimatedCounter = ({ value, duration = 2000, className = '' }: AnimatedCounterProps) => {
    // Extract the numeric part and the suffix (e.g. "745" and "+")
    const numMatch = value.match(/\d+/);
    const suffix = value.replace(/\d+/g, '');
    const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;

    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated || targetNumber === 0) return;

        let startTime: number;
        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);
            
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            
            setCount(Math.floor(easeProgress * targetNumber));

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(targetNumber);
            }
        };

        requestAnimationFrame(animate);
    }, [hasAnimated, targetNumber, duration]);

    // If there was no number to begin with, just render the original string
    if (targetNumber === 0 && !numMatch) {
        return <span className={className}>{value}</span>;
    }

    return (
        <span ref={counterRef} className={className}>
            {count}{suffix}
        </span>
    );
};
