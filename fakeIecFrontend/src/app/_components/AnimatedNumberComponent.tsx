import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface AnimatedNumberProps {
    from: number;
    to: number;
    duration: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ from, to, duration }) => {
    const numberRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const animateNumber = animate(from, to, {
        duration,
        onUpdate: (value) => (numberRef.current!.textContent = value.toFixed(0)), // Control decimal places
        });

        // Clean up animation on unmount
        return () => animateNumber.stop();
    }, [from, to, duration]);

    return <span ref={numberRef} />;
};
  
export default AnimatedNumber;