'use client';
import React, { useRef, useEffect, useState } from 'react';

interface CollapseProps {
    open: boolean;
    children: React.ReactNode;
    duration?: number; // optional duration in ms
}

const Collapse: React.FC<CollapseProps> = ({ open, children, duration = 300 }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<string | number>(open ? 'auto' : 0);

    useEffect(() => {
        const el = contentRef.current;
        if (!el) return;

        const contentHeight = el.scrollHeight;

        if (open) {
            setHeight(contentHeight);

            const timeout = setTimeout(() => {
                setHeight('auto');
            }, duration);

            return () => clearTimeout(timeout);
        } else {
            const currentHeight = el.offsetHeight;
            setHeight(currentHeight);

            requestAnimationFrame(() => {
                setHeight(0);
            });
        }
    }, [open, duration]);

    return (
        <div
            ref={contentRef}
            className="overflow-hidden transition-all ease-in-out"
            style={{
                height: height,
                transitionDuration: `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default Collapse;
