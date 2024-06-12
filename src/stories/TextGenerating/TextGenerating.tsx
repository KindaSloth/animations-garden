import { motion, useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, ex. Accusamus excepturi eveniet doloribus officia dolor maiores! Consequatur, ipsam incidunt perferendis deleniti odit, id impedit, qui esse natus iste dignissimos!";

export const TextGenerating = () => {
    const [ref, animate] = useAnimate();

    useEffect(() => {
        animate('span', { opacity: 1 }, { delay: stagger(0.1) });
    }, [animate]);

    return (
        <motion.div 
            className="text-center p-12"
            ref={ref}
        >
            {text.split(" ").map((word) => (
                <motion.span 
                    className="text-white text-base font-semibold"
                    initial={{ opacity: 0 }}
                >
                    {word}{" "}
                </motion.span>
            ))}
        </motion.div>
    )
}