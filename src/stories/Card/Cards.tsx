import { motion, useAnimate } from 'framer-motion';

export const Cards = () => {
    const [firstCardRef, firstCardAnimate] = useAnimate();
    const [secondCardRef, secondCardAnimate] = useAnimate();
    const [thirdCardRef, thirdCardAnimate] = useAnimate();

    return (
        <div className="relative w-full h-screen bg-gray-200 flex items-center justify-center">
            <motion.div 
                className="absolute w-40 h-40 bg-red-500 rounded transform -translate-x-16 -translate-y-8 z-10" 
                ref={firstCardRef}
                initial={{ opacity: 0.5, x: -64, y: -32 }}
                transition={{ delay: 0.3, ease: "easeOut" }}
                onMouseOver={() => {
                    firstCardAnimate(firstCardRef.current, {
                        opacity: 1,
                        x: -64,
                        y: -100
                    });
                }}
                onMouseOut={() => {
                    firstCardAnimate(firstCardRef.current, {
                        opacity: 0.5,
                        x: -64, 
                        y: -32
                    });
                }}
            />
            <motion.div 
                className="absolute w-40 h-40 bg-blue-500 rounded transform -translate-x-8 -translate-y-4 z-20" 
                ref={secondCardRef}
                initial={{ opacity: 0.5, x: -32, y: -16 }}
                transition={{ delay: 0.3, ease: "easeOut" }}
                onMouseOver={() => {
                    secondCardAnimate(secondCardRef.current, {
                        opacity: 1,
                        x: -32,
                        y: -84
                    });
                }}
                onMouseOut={() => {
                    secondCardAnimate(secondCardRef.current, {
                        opacity: 0.5,
                        x: -32, 
                        y: -16
                    });
                }}
            />
            <motion.div 
                className="absolute w-40 h-40 bg-green-500 rounded z-30" 
                ref={thirdCardRef}
                initial={{ opacity: 0.5, x: 0, y: 0 }}
                transition={{ delay: 0.3, ease: "easeOut" }}
                onMouseOver={() => {
                    thirdCardAnimate(thirdCardRef.current, {
                        opacity: 1,
                        x: 0,
                        y: -68
                    });
                }}
                onMouseOut={() => {
                    thirdCardAnimate(thirdCardRef.current, {
                        opacity: 0.5,
                        x: 0, 
                        y: 0
                    });
                }}
            />
        </div>
    ); 
}