import { useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';

export const Parallax = () => {
    const [y, setY] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        container: scrollContainerRef,
    }); 

    useMotionValueEvent(scrollYProgress, 'change', (progress) => setY(progress * 200));

    return (
        <div className="w-screen h-screen overflow-y-scroll" ref={scrollContainerRef}>
            <div 
                className="relative w-full h-full flex items-center justify-center"
                style={{
                    backgroundImage: "url('/mountain-background.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed"
                }}
            >
                <div
                    className="absolute bottom-[500px] left-1/2 transform -translate-x-1/2 z-10"
                >
                    <motion.h1 
                        className="text-white text-8xl font-bold"
                        animate={{ y }}
                    >
                        Parallax
                    </motion.h1>
                </div>

                <div className="absolute w-full h-[500px] bottom-0 z-20">
                    <img src="/mountain-without-background-652.png" alt="mountains" className='w-full h-full' />
                </div>
            </div>
            <div className="w-full h-full bg-cyan-950 flex flex-col items-center justify-center text-center p-12 gap-4">
                <p className="text-white text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam, est deserunt aliquid cupiditate temporibus ipsam reiciendis id officia? Veritatis vitae officia magni ab perferendis maxime ducimus earum corporis sapiente?</p>
                <br />
                <p className="text-white text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam, est deserunt aliquid cupiditate temporibus ipsam reiciendis id officia? Veritatis vitae officia magni ab perferendis maxime ducimus earum corporis sapiente?</p>
                <br />
                <p className="text-white text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aperiam, est deserunt aliquid cupiditate temporibus ipsam reiciendis id officia? Veritatis vitae officia magni ab perferendis maxime ducimus earum corporis sapiente?</p>
            </div>
        </div>
    )
}